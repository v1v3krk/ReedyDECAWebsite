import React from 'react';

import {FaUser, FaUsers, FaBook, FaComments, FaStopwatch, FaList, FaTimes} from "react-icons/fa"

import { MdGavel } from "react-icons/md";

import './RulesBar.css';

const rulesBar = (props) => {

    return (
        <div className="RulesBar" style={props.smg ? {marginTop: '30px'}: null}>
            <div>
                {props.rules['Participants'] > 1 || props.rules['Participants'] === "1 to 3"
                ? 
                <div>
                    <FaUsers className="Icon"/>
                    <p className="RuleText">Participants: {props.rules['Participants']}</p>
                </div>
                :
                <div>
                    <FaUser className="Icon"/>
                    <p className="RuleText">Participant: {props.rules['Participants']}</p>
                </div>
                }
            </div>
            <div className="times">
                <FaBook className="Icon"/>
                <p className="RuleText">{props.rules['Exam']}</p>
                {props.imc ? <p className="RuleText">20 (or Less) Page Written Entry</p> : null}
            </div>
            <div>
                <FaComments className="Icon" />
                <p className="RuleText">{props.rules['Judge']}</p>
            </div>
            <div className="times">
                <FaStopwatch className="Icon" />
                {props.rules['Prep Time'] ? <p className="RuleText">Prep: {props.rules['Prep Time']} Minutes</p>
                 : null}
                
                {!props.smg ?
                <p className="RuleText">{props.pi && !props.imc? "Interview" : "Presentation"}: {props.rules['Interview Time']} Minutes</p>:
                <p className="RuleText">None</p>
                }
            </div>
            <div className="times">
                <a href={props.guidelines} target="_blank" style={{textDecoration:'none', color:'white'}}>
                    <MdGavel className="Icon" />
                    <p className="RuleText">Guidelines</p>
                    <p className="RuleText">(Click Here)</p>
                </a>
            </div>
            {props.pi ?
            <div className="times">
                <a href={props.pi} target="_blank" style={{textDecoration:'none', color:'white'}}>
                    <FaList className="Icon" />
                    <p className="RuleText">Performace Indicators</p>
                    <p className="RuleText">(Click Here)</p>
                </a>
            </div>
            :
            <div className="times">
                <a href={props.ppc} target="_blank" style={{textDecoration:'none', color:'white'}}>
                    <FaTimes className="Icon" />
                    {!props.smg ?
                    <div>
                        <p className="RuleText">Penalty Point Checklist</p>
                        <p className="RuleText">(Click Here)</p>
                    </div>
                    :
                    <p className="RuleText">None</p>}
                </a>
            </div>
            }
            
        </div>
    )

}

export default rulesBar;