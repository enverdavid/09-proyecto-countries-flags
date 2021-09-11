import React from "react";
import { Search } from "./Search";
import { Sidebar } from "./Sidebar";
import "./styles/Main.css";
import { BrowserRouter as Router} from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <div className="main-container">
        <Sidebar />

        <Search />
      </div>
    </Router>
  );
};

export { Main };
