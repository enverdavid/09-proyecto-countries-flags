import React from "react";
import { Search } from "./Search";
import { Sidebar } from "./Sidebar";
import "./styles/Main.css";
import { BrowserRouter as Router} from "react-router-dom";
import { RouterContainer } from "./RouterContainer";

const Main = () => {
  return (
    <Router>
      <div className="main-container">

        <Sidebar />
        <div>
          <Search />
          <RouterContainer/>
        </div>
      </div>
    </Router>
  );
};

export { Main };
