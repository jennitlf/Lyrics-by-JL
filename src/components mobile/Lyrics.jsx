import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Lyrics.css";
import data from "../data/listMusics.json"; 
import { useParams, useNavigate } from "react-router-dom";

const Lyrics = () => {
    const { index } = useParams();
    const navigate = useNavigate();
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
        return <div className="container-lyrics-mobile">Carregando...</div>;
    }

    const more = () => {
        const parsedIndex = parseInt(index);
        let nextItem = parsedIndex + 1
        if (nextItem >= data.length){
            nextItem = data.length - 1
        }
        navigate(`/composicoes/${nextItem}`)
    }

    const less = () => {
        const parsedIndex = parseInt(index);
        let nextItem = parsedIndex - 1
        if (nextItem <= 0){
            nextItem = 0
            console.log("ok")
        }
        navigate(`/composicoes/${nextItem}`)
    }
    

    return (
        <div className="container-lyrics">
            <h2>{sortedData[parseInt(index)].titulo}</h2>
            {lyrics}
            <div className="controls-mobile">   
                <Link to={"/composicoes"} className="back-compositions-mobile"><button id="button-back-mobile"><i className="fa-solid fa-arrow-rotate-left"></i></button></Link>
                <button onClick={less} ><i className="fa-solid fa-arrow-left"></i></button>
                <button onClick={more} ><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Lyrics;