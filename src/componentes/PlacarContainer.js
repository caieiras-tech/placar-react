import React from "react";
import Placar from "./Placar";
import './PlacarContainer.scss'

const PlacarContainer = () => {
    return (
        <div className="PlacarContainer">
            <Placar time="Front" />
            <Placar time="Back" />
        </div>
    )
}

export default PlacarContainer;