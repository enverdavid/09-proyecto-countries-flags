import React from "react";
import "./styles/Sidebar.css"
import {
    NavLink
} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar-container">
            <h3>Continentes</h3>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/continent/Africa" activeClassName="selected-continent" exact>
                            África
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/continent/Americas" activeClassName="selected-continent" exact>
                            Ameríca
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/continent/Asia" activeClassName="selected-continent" exact>
                            Asia
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/continent/Europe" activeClassName="selected-continent" exact>
                            Europa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/continent/Oceania" activeClassName="selected-continent" exact>
                            Oceanía
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export {Sidebar}