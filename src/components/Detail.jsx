import React from "react";
import "./styles/Detail.css";

const Detail = ({countryObj}) => {

  const {name, capital, flag} = countryObj;

  return (
    <div className="detail-view">
        <h3>Soy una vista detalle</h3>
        <h2>{name}</h2>
        <h3>{capital}</h3>
        <img 
          src={flag}
          alt=""
          className="flag-img" 
        />
    </div>
  );
};

export { Detail };
