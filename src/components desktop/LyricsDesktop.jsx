import React, { useEffect, useState, useMemo } from "react";
import "./LyricsDesktop.css";
import data from "../data/listMusics.json"; 
import { useParams } from "react-router-dom";

const LyricsDesktop = () => {
    const { index } = useParams();
    const [lyrics, setLyrics] = useState(null);
    const sortedData = useMemo(() => {
        return [...data].sort((a, b) => a.titulo.localeCompare(b.titulo));
    }, []);

    useEffect(() => {
        
        const parsedIndex = parseInt(index);
        if (isNaN(parsedIndex) || parsedIndex < 0 || parsedIndex >= sortedData.length) {
           
            console.error("Índice inválido ou não encontrado");
            return;
        }

        
        const letra = sortedData[parsedIndex].letra;
        const paragrafos = letra.split(/\n{2,}/).map((paragrafo, index) => (
            <p key={index}>{paragrafo.split('\n').map((linha, i) => <React.Fragment key={i}>{i > 0 ? <br /> : null}{linha}</React.Fragment>)}</p>
        ));

        
        setLyrics(paragrafos);
    }, [index, sortedData]);

    if (!lyrics) {
        return <div className="container-lyrics-desktop">Carregando...</div>;
    }

    

    return (
        <div className="container-lyrics1">
            <h2>{sortedData[parseInt(index)].titulo}</h2>
            {lyrics}
        </div>
    );
};

export default LyricsDesktop;