import React, { useEffect } from "react";
import "./Compositions.css"
import  data from "../data/listMusics.json"
import { Link } from "react-router-dom";

const Compositions = () => {

    const sortedData = [...data].sort((a, b) => a.titulo.localeCompare(b.titulo));

    return (
        <div className="container-main">
          <ul>
            {sortedData.map((item, index) => (
              <li className="unit" key={index}>
                <Link to={`/composicoes/${index}`} className="link2">{item.titulo}</Link>
              </li>
            ))}
          </ul>
        </div>
    )
}

export default Compositions;