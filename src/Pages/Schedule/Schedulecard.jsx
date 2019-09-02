import React from 'react';

import { Button } from "../../Component";
import { NavLink } from 'react-router-dom';
import Auth from "../../Hoc/Auth";

function Schedulecard(props) {
    console.log(props)
    return (
        <article className="slds-card">
            <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                    <div className="slds-no-flex">
                        {props.match.date} {'on ' + props.match.time} <br/>{'At ' + props.match.stadium}
                    </div>
                </header>
            </div>
            <div className="matchno">
                <h3>{'match ' + props.matchno}: <span>{props.match.team1} VS {props.match.team2}</span></h3>
            </div>
            <div className="slds-card__body slds-card__body_inner">
                <div className="match">
                    <div className="result">
                        {props.match.result ? (
                            <span>{props.match.result}</span>
                        ):(
                            <span>Match not Played yet</span>
                        )}
                    </div>
                </div>
            </div>
            <footer className="slds-card__footer">
                {!props.match.locked ? (
                    <div>
                        <NavLink to={`/predict/${props.match.id}`}>
                            <Button className="slds-card__footer-action" {...{ text: "Predict", id: props.match.id }} />
                        </NavLink>
                        {!Auth.adminAuth ? (
                            <Button className="slds-card__footer-action" {...{ text: "Lock", id: props.match.id, handel: props.lock, class: 'slds-button_text-destructive' }} />
                        ) : null}
                    </div>
                ) : (
                        <div>
                            {!Auth.adminAuth ? (
                                <Button className="slds-card__footer-action" {...{ text: "Add Result", id: props.match.id, handel: props.predict, class: 'slds-button_brand' }} />
                            ) : null}
                        </div>
                    )}
            </footer>
        </article>
    );
}

export default Schedulecard;