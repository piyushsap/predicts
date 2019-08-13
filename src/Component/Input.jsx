import React from "react";
const Input = props => {
    return (
        <div className="slds-form-element">
            <div className="slds-form-element__control">
                <input
                    name={props.name}
                    id={props.id}
                    placeholder={props.placeHolder || null}
                    type={props.type || 'text'}
                    onBlur={props.handleBlur || null}
                    className="slds-input" />
            </div>
        </div>
    )
}
export default Input;