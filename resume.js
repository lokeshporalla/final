import React from 'react';
import data from './data.json';

function Resume(props){
 let profile = data.details[props.location.personcard.id];

    console.log(profile);
    return (
        <div>
            <h1>lokesh</h1>
        </div>
    )
    
}
export default Resume;
