import React from "react";


const Top = props => (

    <div className="navi">

        <nav className="navbar navbar-dark bg-danger fixed-top">
            <span className="navbar-brand mb-0 h1"><strong>Automobile Clicky Game</strong></span>
            <span className="navbar-brand mb-0 h1">{props.message}</span>
            <span className="navbar-brand mb-0 h1">Score: {props.score}</span>
            <span className="navbar-brand mb-0 h1">High Score: {props.highscore}</span>
        </nav>
        {/* <h3><strong>{props.message}</strong></h3>
        <p><strong>Score: </strong>{props.score}</p>
        <p><strong>High Score: </strong>{props.highscore}</p> */}
    </div>


)
export default Top;