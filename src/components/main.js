import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../style/main.css';

import SubCategory from "./subcategory";
import routes from "../data/minecraftstats/routemap.json";

export default function Main() {
    return (
        <div className="Container">
            <Router>
                <div className="MainNav">
                    <div>
                        <h3>Categories</h3>
                        <ul>
                            {Object.keys(routes).map((route, i) => <li key={i}> <Link to={route}> {route} </Link> </li>)}
                        </ul>
                    </div>
                </div>
                
                <Switch>
                    <Route path="/:category" children={<SubCategory />} />
                </Switch>
            </Router>
        </div>
    );
}