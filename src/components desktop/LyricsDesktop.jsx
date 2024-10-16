import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./LyricsDesktop.css";
import data from "../data/listMusics.json";
import { useParams, useNavigate } from "react-router-dom";

const LyricsDesktop = () => {
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

        
        const groupedParagrafos = [];
        for (let i = 0; i < paragrafos.length; i += 5) {
            groupedParagrafos.push(paragrafos.slice(i, i + 5));
        }

        setLyrics(groupedParagrafos);
    }, [index, sortedData]);

    if (!lyrics) {
        return <div className="container-lyrics-desktop">Carregando...</div>;
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
        <div className="container-lyrics1">
            <h2>{sortedData[parseInt(index)].titulo}</h2>
            <div className="container-lyrics1-1">
                <div className="left-column">
                    {lyrics.map((group, idx) => idx % 2 === 0 && (
                        <div key={idx} className="group">
                            {group}
                        </div>
                    ))}
                </div>
                <div className="right-column">
                    {lyrics.map((group, idx) => idx % 2 !== 0 && (
                        <div key={idx} className="group">
                            {group}
                        </div>
                    ))}
                </div>
            </div>
            <div className="controls">   
                <Link to={"/composicoes"} className="back-compositions"><button id="button-back"><i className="fa-solid fa-arrow-rotate-left"></i></button></Link>
                <button onClick={less} ><i className="fa-solid fa-arrow-left"></i></button>
                <button onClick={more} ><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default LyricsDesktop;