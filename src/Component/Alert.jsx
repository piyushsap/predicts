import React from "react";

const Alert = props => {
    return (
        <div class="slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_info" role="alert">
            <span class="slds-assistive-text">info</span>
            <h2>Logged in as John Smith (johnsmith@acme.com).<a href="javascript:void(0);">Log out</a>
            </h2>
            <div class="slds-notify__close">
                <button class="slds-button slds-button_icon slds-button_icon-small slds-button_icon-inverse" title="Close">
                    <span class="slds-assistive-text">Close</span>
                </button>
            </div >
        </div >
    )
}
export default Alert;