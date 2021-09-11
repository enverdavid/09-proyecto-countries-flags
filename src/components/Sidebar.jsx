import React from "react";
import "./styles/Sidebar.css"
import { Continents } from "./Continents";

const Sidebar = () => {
    return (
        <aside className="sidebar-container">
            <Continents />
        </aside>
    )
}

export {Sidebar}