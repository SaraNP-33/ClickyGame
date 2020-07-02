import React from "react";
import "./style.css";

function ScrubsCards(props){
    return(
        <div className="card"  onClick={props.click}>
            <div className="img-container" >
            <img  data-id={props.id} alt={props.name} key src={process.env.PUBLIC_URL + props.image}/>

            </div>
        </div>
    )
}

export default ScrubsCards;