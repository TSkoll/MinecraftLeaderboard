import React from "react";
import { useParams, Switch, BrowserRouter as Router, Link, Route } from "react-router-dom";

import routes from "../data/minecraftstats/routemap.json";
import Leaderboard from "./leaderboard";

export default function SubCategory() {
    let { category } = useParams();
    let subRoutes = routes[category];
    subRoutes.sort();

    let categories = subRoutes.map((route, i) => {
        let logo;
        try {
           logo = require(`../img/${route.replace("minecraft:", "")}.png`);
        } catch {
            logo = null;
        }

        return (
            <li key={i}>
                <span>
                    {(logo) ? <img width={16} height={16} src={logo} alt={route} /> : null}
                    <Link to={`/${category}/${route}`}>{route}</Link>
                </span>
            </li>
        );
    })

    return (
        <Router>
            <div className="SubNav">
                <div>
                    <h3>{category}</h3>
                    <ul>
                        {categories}
                    </ul>
                </div>
            </div>

            <Switch>
                <Route path="/:category/:stat" children={<Leaderboard />}  />
            </Switch>
        </Router>
    );
}