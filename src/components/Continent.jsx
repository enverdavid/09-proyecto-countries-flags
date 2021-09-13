import React from 'react';
import "./styles/Continent.css";
import {useParams} from "react-router-dom";
import { useState, useEffect } from 'react';

import { Card } from './Card';

const Continent = () => {

    const {id} = useParams();
    const [continentData, setContinentData] = useState([]);

    const getContinentData = async () => {
        const response = await fetch(`https://restcountries.eu/rest/v2/region/${id}`);
        const result = await response.json();

        setContinentData(result)
    }

    useEffect(() => {
        getContinentData()
    }, [id]);


    return (
        <div className="continent-container">

            {continentData.map(({alpha3Code, flag, name, capital}) => {
                return(
                    <Card key={alpha3Code} flag={flag} name={name} capital={capital}/>
                )
            })}

        </div>
    )
}

export {Continent};
