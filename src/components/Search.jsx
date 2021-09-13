import React from "react";
import { useState } from "react";


import { useHistory } from "react-router-dom";

import "./styles/Search.css";

const Search = () => {
  const history = useHistory();

  const [inputName, setInputName] = useState("");
  // const [countryData, setCountryData] = useState([]);

  // const getCountryData = async () => {
  //   const response = await fetch(`https://restcountries.eu/rest/v2/name/${inputName}`);
  //   const result = await response.json();
  //   setCountryData(result[0]);
  // }

  return (
    <div className="search-container">
      <div className="input-search-container">
        <input
          placeholder="Search country"
          type="text"
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
        <button onClick={() => history.push(`/detail/${inputName}`)}>GO</button>
      </div>
    </div>
  );
};

export { Search };
