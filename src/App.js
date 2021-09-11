import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Detail } from "./components/Detail";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Search } from "./components/Search";
import { Sidebar } from "./components/Sidebar";


function App() {

  const [country, setCountry] = useState("");

  const getCountryData = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/name/peru");
    const result = await response.json();

    setCountry(result[0]);
  }

  useEffect(() => {
     getCountryData();
  }, []);

  return (
    <div className="app-container">
        <Header />
        <Main />

    </div>
  )
}

export default App;
