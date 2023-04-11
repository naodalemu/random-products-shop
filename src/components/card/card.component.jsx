import React from "react";

import "./card.styles.css";

export const Card = (props) => (
    <div className="card-container">
    <h1 className="classIcons">{props.monsters.image}</h1>
        <h1>{props.monsters.name}</h1>
        <p> {props.monsters.madeIn} </p>
    </div>
)