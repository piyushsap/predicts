import React from "react";
const Input = props => {
    return (
        <div className={'slds-form-element '+ (props.errors!=='' &&  props.required ? 'slds-has-error' : '')}>
            <div className="slds-form-element__control">
                <input
                    name={props.name}
                    id={props.id}
                    placeholder={props.placeHolder || null}
                    type={props.type || 'text'}
                    onBlur={props.handleBlur || null}
                    onChange={props.handleChange || null}
                    className="slds-input" />
            </div>
            {props.errors !== '' ? (
              <div className="slds-form-element__help" id="error-message-unique-id">{props.errors}</div>
            ) : null}
        </div>
    )
}
export default Input;