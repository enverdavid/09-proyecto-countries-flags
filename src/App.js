import React from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Detail } from "./components/Detail";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Sidebar } from "./components/Sidebar";


function App() {
  return (
    <div className="app-container">
        <Header />
        <div className="container-main-and-aside">
            <Sidebar />
            <main>
                <section>
                    <Search />
                    <div className="principal-container">
                      <p>Soy el contenedor de la parte principal</p>
                        <Card />
                        <Detail />
                        <Detail />
                        <Detail />
                    </div>
                </section>
            </main>
        </div>
    </div>
  )
}

export default App;
