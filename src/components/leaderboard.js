import React from "react";

import playerdata from "../data/minecraftstats/playerdata.json";
import usermap from "../data/minecraftstats/usermap.json"

import { useParams } from "react-router-dom";

export default function Leaderboard() {
    let { category, stat } = useParams();
    let players = Object.keys(playerdata);

    let shownData = [];
    for (let player of players) {
        shownData.push({
            player: usermap[player.replace(/-/g)],
            value: (playerdata[player].stats[category] ? playerdata[player].stats[category][stat] || 0 : 0)
        });
    }

    shownData.sort((a, b) => b.value - a.value);

    return (
        <div className="Leaderboard">
            <div>
                <h3>/{stat}</h3>

                <ul>
                    {shownData.map((playerStat, i) => <li key={i}> {playerStat.player} - {playerStat.value} </li>)}
                </ul>
            </div>
         </div>
    )
}