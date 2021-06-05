import React from 'react';
import {details} from './data.json';
import logo from './logo.svg';
import{Link} from 'react-router-dom';

let Cards = () => {
    let cardData = details;
    console.log("hai");
    let images = [logo,logo];
    return (
        <div>
            <h1 className="text-primary">Cards</h1>
<div className="row">
{cardData.map((values,index)=>(
    <div className="col mx-3" key={index}>
    <div className="card">
        <img src={images[index]} />
        <h1 > {values.card.name}</h1>
        <p>{values.card.mobile}</p>
        <p>{values.card.numcard}</p>
        <a href={"mailto:"+values.card.email}><p>{values.card.email}</p></a>
        <p>{values.card.career}</p>
        <Link to={{pathname:"/resume",personcard:{id:index}}} className="btn btn-primary">click me</Link>
    </div>
    </div>
))}
</div>

        </div>
    )
}
export default Cards