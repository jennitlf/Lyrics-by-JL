import React from "react";
import "./CompositionsDesktop.css"
import  data from "../data/listMusics.json"
import { Link } from "react-router-dom";

const CompositionsDesktop = () => {

    const sortedData = [...data].sort((a, b) => a.titulo.localeCompare(b.titulo));

    return (
        <div className="container-main-desk">
          <ul>
            {sortedData.map((item, index) => (
              <li className="unit-li" key={index}>
                <Link to={`/composicoes/${index}`} className="link2-desk">{`${index + 1}. ${item.titulo}`}</Link>
              </li>
            ))}
          </ul>
        </div>
    )
}

export default CompositionsDesktop;