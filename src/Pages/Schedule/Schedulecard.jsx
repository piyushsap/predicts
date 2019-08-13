import React from 'react';

import { Button } from "../../Component";

function Schedulecard(props) {
    return (
        <article className="slds-card">
            <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                    <div className="slds-media__body">
                        <h2 className="slds-card__header-title">
                            <span>{props.match.team1} VS {props.match.team2}</span>
                        </h2>
                    </div>
                    <div className="slds-no-flex">
                        {props.match.date} {'on ' + props.match.time} {'at ' + props.match.stadium}
                    </div>
                </header>
            </div>
            <div className="slds-card__body slds-card__body_inner">
                <div className="match">
                    <div className="opponent">
                        {props.match.team1}
                    </div>
                    <div className="opponent">
                        {props.match.team2}
                    </div>
                    <div className="result">
                        {props.match.result}
                    </div>
                </div>
            </div>
            <footer className="slds-card__footer">
                {!props.match.locked ? (
                    <div>
                        <Button className="slds-card__footer-action" {...{ text: "Predict", id: props.match.id, handel: props.predict }} />
                        <Button className="slds-card__footer-action" {...{ text: "Lock", id: props.match.id, handel: props.lock, class: 'slds-button_text-destructive' }} />
                    </div>
                ) : (
                        <Button className="slds-card__footer-action" {...{ text: "Add Result", id: props.match.id, handel: props.predict, class: 'slds-button_brand' }} />
                    )}
            </footer>
        </article>
    );
}

export default Schedulecard;