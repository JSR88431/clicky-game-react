import React from "react";

const Pictures = props =>(

    <div className = "card mt-5">
        <div className = "img-container grow">

        <a onClick={() => props.carPicker(props.name)} alt={props.name}>
            <img src={props.image} alt={props.name} className = "img-fluid"></img>
        </a>
        
        </div>


    </div>





);



export default Pictures;