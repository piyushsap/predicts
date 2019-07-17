import React from "react";
const Button = props =>{
    return (
        <button id={props.id || props.text} onClick={props.handel || null} type={props.type || 'submit'}> {props.text || "Submit"} </button>
    )
}
export default Button;