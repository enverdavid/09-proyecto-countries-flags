import React from "react";
import "./styles/Card.css";

const Card = ({ flag, name, capital }) => {
  return (
    <div className="card-container">
      <img className="flag-image" src={flag} alt="a country flag" />
      <div className="description-country">
        <h4>{name}</h4>
        <h6>Capital: {capital}</h6>
      </div>
    </div>
  );
};

export { Card };
