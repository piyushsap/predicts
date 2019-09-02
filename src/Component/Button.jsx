import React from "react";
const Button = props =>{
    return (
        <button className={'slds-button '+ (props.class || 'slds-button_neutral')}  
        id={props.id || props.text} 
        onClick={props.handel || null} 
        type={props.type || 'submit'} 
        disabled={props.disable || false}> {props.text || "Submit"} </button>
    )
}
export default Button;