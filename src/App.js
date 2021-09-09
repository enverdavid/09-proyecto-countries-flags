import React from "react";
import "./App.css";
import { Detail } from "./components/Detail";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Sidebar } from "./components/Sidebar";


function App() {
  return (
    <div className="container">
        <Header />
        <div className="container-main-and-aside">
            <Sidebar />
            <main>
                <section>
                    <Search />
                    <div className="principal-container">
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
