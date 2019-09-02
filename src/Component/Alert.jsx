import React from "react";

const Alert = props => {
    return (
        <div className={'"slds-notify slds-notify_alert slds-theme_alert-texture '+ (props.class || 'slds-theme_info')} role="alert">
            <span className="slds-assistive-text">info</span>
            <h2>{props.text}
            </h2>
            <div className="slds-notify__close">
                <button className="slds-button slds-button_icon slds-button_icon-small slds-button_icon-inverse" title="Close">
                    x
                    <span className="slds-assistive-text">Close</span>
                </button>
            </div >
        </div >
    )
}
export default Alert;