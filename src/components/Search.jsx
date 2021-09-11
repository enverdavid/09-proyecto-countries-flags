import React from "react";
import { useState, useEffect } from "react";
import { Detail } from "./Detail";

import "./styles/Search.css"

const Search = () => {

    const [inputName, setInputName] = useState("");
    const [countryData, setCountryData] = useState([]);

    const getCountryData = async () => {
      const response = await fetch(`https://restcountries.eu/rest/v2/name/${inputName}`);
      const result = await response.json();
      setCountryData(result[0]);
    }

    return (
        <div className="search-container">
            <p>Soy el componente Search</p>
            <input type="text" onChange={(e) => {
                setInputName(e.target.value);
            }} />
            <button onClick={() => getCountryData()}>
                GO
            </button>
            <Detail countryObj={countryData}/>
        </div>
    )
}

export {Search};