import React from "react";
const Select = props => {
    return (
        <div className="slds-form-element">
            <div className="slds-form-element__control">
                <div className="slds-select_container">
                    {
                        props.multiple ? (
                            <select
                                className="slds-select"
                                name={props.name}
                                id={props.id}
                                placeholder={props.placeHolder || null}
                                onChange={props.handleBlur || null}
                                multiple>
                                {
                                    props.placeHolder ? (
                                        <option>{props.placeHolder}</option>
                                    ) : null
                                }

                                {
                                    props.options.map((option) => {
                                        return <option key={option.id} value={option.userID}>{option.dname}</option>
                                    })
                                }
                            </select>
                        ) : (
                                <select
                                    className="slds-select"
                                    name={props.name}
                                    id={props.id}
                                    placeholder={props.placeHolder || null}
                                    onChange={props.handleBlur || null} >
                                    {
                                        props.placeHolder ? (
                                            <option>{props.placeHolder}</option>
                                        ) : null
                                    }

                                    {
                                        props.options.map((option) => {
                                            return <option key={option.alias} value={option.alias}>{option.name}</option>
                                        })
                                    }
                                </select>
                            )
                    }
                </div>
            </div>
        </div>
    )
}
export default Select;