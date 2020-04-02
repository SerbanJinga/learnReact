import React from 'react';

export default function Joke(props) {
    let quest = "Question:";
    if(!props.question){
        quest = "";
    }
    
    return(
        <div className="joke">
            <p>{quest} {props.question}</p>
            <p style={{color: 'red'}}>Punchline: {props.punchLine}</p>
        </div>
    )
}