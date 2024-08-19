import React, { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import "./LyricsDesktop.css";
import data from "../data/listMusics.json";
import { useParams } from "react-router-dom";

const LyricsDesktop = () => {
    const { index } = useParams();
    const [lyrics, setLyrics] = useState(null);
    const [composicao, setComposicao] = useState(null);
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

        // Divida os parágrafos em grupos de 4
        const groupedParagrafos = [];
        for (let i = 0; i < paragrafos.length; i += 4) {
            groupedParagrafos.push(paragrafos.slice(i, i + 4));
        }

        setLyrics(groupedParagrafos);
        setComposicao(sortedData[parsedIndex]);
    }, [index, sortedData]);

    if (!lyrics) {
        return <div className="container-lyrics-desktop">Carregando...</div>;
    }

    return (
        <div className="container-lyrics1">
            <Helmet>
                <meta property="og:title" content={composicao.titulo} />
                <meta property="og:description" content={composicao.descricao || "Descrição da composição"} />
                <meta property="og:image" content={composicao.imagemURL || "URL padrão da imagem"} />
                <meta property="og:url" content={`https://letrasbyjenniferlima.netlify.app/composicoes/${index}`} />
                <meta property="og:type" content="website" />
                <title>{composicao.titulo}</title>
            </Helmet>
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
        </div>
    );
};

export default LyricsDesktop;