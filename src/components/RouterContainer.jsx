import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";
import { Continent } from './Continent';
import { Detail } from './Detail';

export const RouterContainer = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <h1>Cualquier componente</h1>
                </Route>
                <Route path="/detail/:id" component={ Detail } exact/>
                <Route path="/continent/:id" component={ Continent } exact/>
                <Route path="*"  exact>
                    <h2>Error 404</h2>
                </Route>    

            </Switch>
        </div>
    )
}
