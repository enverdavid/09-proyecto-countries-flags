import React from "react";
import "./styles/Detail.css";
import{useParams} from 'react-router-dom'
import {useState, useEffect} from 'react';
import { Card } from "./Card";

const Detail = () => {

  const {id} = useParams();
  const [countryData, setCountryData] = useState([]);

  const getCountryData = async () => {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${id}`);
    const result = await response.json();
    setCountryData(result[0]);
  }

  useEffect(() => {
    getCountryData();
  }, [id])

  console.log(countryData)
 
  return (
    <div className="detail-view">
        <Card 
          key={countryData.alpha3Code} 
          flag={countryData.flag} 
          name={countryData.name} 
          capital={countryData.capital}/>
    </div>
  );
};

export { Detail };
