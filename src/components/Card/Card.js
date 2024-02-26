import { useState } from 'react';
import Description from '../Description/Description';
import "./Card.css"

export default function Card({infoPersonaje}) {

    let [hide,setHide]=useState(true);

    const showMore=()=>{
        setHide(false)
    }

    return(
       <div className="rounded card p-2 d-flex flex-row gap-3">
            <div>
                <img src={infoPersonaje.image}/>
                <h3>{infoPersonaje.name}</h3>
                <button className="btn btn-success w-50 p-2 btnPerson" onClick={showMore}>Know More...</button>
            </div>
            {hide === false? <Description status={infoPersonaje.status} especie={infoPersonaje.species} genero={infoPersonaje.gender} origen={infoPersonaje.origin.name} setHide={setHide}/>:''}
       </div>
    )
    
}
