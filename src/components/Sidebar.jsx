import React from "react";
import "./styles/Sidebar.css"

const Sidebar = () => {
    return (
        <aside className="sidebar-container">
            <h2>Continentes</h2>
            <nav>
                <ul>
                    <li>
                        África
                    </li>
                    <li>
                        América
                    </li>
                    <li>
                        Asia
                    </li>
                    <li>
                        Europa
                    </li>
                    <li>
                        Oceanía
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export {Sidebar}