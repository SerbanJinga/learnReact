import React from 'react';

export default function Checkbox(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "cdcdcd",
        textDecoration: "line-through"
    }
    if(props.isLoading){
        return(
            <h1>Esti prost</h1>
        )
    }
    return(
        <form className="todo-item">
            <input id="vehicle1" type="checkbox" checked={props.completed} onChange={() => props.handleChange(props.id)} value="Bike"/>
            <label style={props.completed ? completedStyle : null} for="vehicle1">{props.text}</label><br/>
        </form>
        )
}