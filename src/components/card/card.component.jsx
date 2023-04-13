import React from "react";

import "./card.styles.css";

export const Card = (props) => (
    <div className="card-container">
    <h1 className="classIcons">{props.monsters.image}</h1>
        <h1>{props.monsters.name}</h1>
        <div className="info-container">
            <p> <b>Made in:</b> {props.monsters.madeIn}</p>
            <p> <b>Color options:</b> {props.monsters.color} </p>
            <p> <b>Price:</b> ${props.monsters.price} </p>
            <p className="status"> <b>{props.monsters.rent ? "For Rent" : "To Buy"}</b> </p>
            <p className="desc"> <b>Description:</b> {props.monsters.description} </p>
        </div>
    </div>
)
