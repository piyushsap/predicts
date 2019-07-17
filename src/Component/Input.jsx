import React from "react";
const Input = props =>{
    return (
        <input 
        name={props.name}
        id={props.id}
        placeholder={props.placeHolder || null}
        type={props.type ||'text'}
        onBlur={props.handleBlur || null} />
    )
}
export default Input;