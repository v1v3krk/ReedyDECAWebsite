import React, { Component } from 'react';

import './EventsLister.css';

import {FaBuilding, FaCity, FaGlobeAmericas, FaAtlas} from "react-icons/fa"


class EventLister extends Component {

    state = {
        openElements: []
    }

    toggleEvents = (id) => {

        let oldElementsOpen = [...this.state.openElements];
        if(oldElementsOpen.includes(id)) {
            oldElementsOpen = oldElementsOpen.filter(value => (value !== id));
        } else {
            oldElementsOpen.push(id);
        }
        

        this.setState({
            openElements: oldElementsOpen,
        })

        
    }

    render () {
        const RenderSubEvents = Object.keys(this.props.info).map((element, igKey) => {
            return (
                <div>
                    <div className="SubEventCard" onClick={() => (this.toggleEvents(igKey))} 
                    style={{borderTop: this.state.openElements.includes(igKey) ? '7px solid #1750ac': '7px solid #25783b'}}>
                        <p className="SubEvent">{element}</p>
                        <p className="SubEventCardDesc">{this.props.info[element]['Description']}</p>
                        <div className="SubEventCardIcons">
                            <div className="SubEventCardDistrict">
                                <div>
                                    <FaBuilding className="StatIcon"/>
                                    <p className="StatHeader">Participants</p>
                                    <p className="StatDesc">District: {this.props.info[element]['ParticipancyDistrict']} {this.props.pronoun}</p>
                                </div>
                            </div>
                            <div className="SubEventCardState">
                                <div>
                                    <FaCity className="StatIcon"/>
                                    <p className="StatHeader">Participants</p>
                                    <p className="StatDesc">State: {this.props.info[element]['ParticipancyState']} {this.props.pronoun}</p>
                                </div>
                            </div>
                            <div className="SubEventCardSuccess">
                                <div>
                                    <FaGlobeAmericas className="StatIcon"/>
                                    <p className="StatHeader">Qualifiers</p>
                                    <p className="StatDesc">ICDC: {this.props.info[element]['Success']} {this.props.pronoun}</p>
                                </div>  
                            </div>
                            <div className="SubEventCardResources">
                                <div className="lastStat">
                                    <FaAtlas className="StatIcon" style={{color: "#25783b"}}/>
                                    <a href={this.props.info[element]['quizessay']} target="_blank">
                                        <p className="StatHeader" style={{color: "#25783b"}}>{!this.props.essay ? "Quizlets" : "Past Essays"}</p>
                                    </a>
                                    <p className="StatHeader" style={{color: "#25783b"}}>Roleplay Chatbot</p>
                                    {this.props.imc ?
                                    <p className="StatHeader" style={{color: "#25783b"}}>Quizlets</p>: null}
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.openElements.includes(igKey) ?
                    <div className="SubEventDesc">
                        <p class="Desc">{this.props.info[element]['Description']}</p>
                        <div className="SubEventStats">
                            <div>
                                <FaBuilding className="StatIcon"/>
                                <p className="StatHeader">Participants</p>
                                <p className="StatDesc">District: {this.props.info[element]['ParticipancyDistrict']} {this.props.pronoun}</p>
                            </div>
                            <div>
                                <FaCity className="StatIcon"/>
                                <p className="StatHeader">Participants</p>
                                <p className="StatDesc">State: {this.props.info[element]['ParticipancyState']} {this.props.pronoun}</p>
                            </div>
                            <div>
                                <FaGlobeAmericas className="StatIcon"/>
                                <p className="StatHeader">Qualifiers</p>
                                <p className="StatDesc">ICDC: {this.props.info[element]['Success']} {this.props.pronoun}</p>
                            </div>  
                            <div className="lastStat">
                                <div>
                                    <FaAtlas className="StatIcon" style={{color: "#25783b"}}/>
                                    <a href={this.props.info[element]['quizessay']} target="_blank">
                                        <p className="StatHeader" style={{color: "#25783b"}}>{!this.props.essay ? "Quizlets" : "Past Essays"}</p>
                                    </a>
                                </div>
                                <div>
                                    <FaAtlas className="StatIcon" style={{color: "#25783b"}}/>
                                    <p className="StatHeader" style={{color: "#25783b"}}>Roleplay Chatbot</p>
                                </div>
                                {this.props.imc ?
                                <div>
                                    <FaAtlas className="StatIcon" style={{color: "#25783b"}}/>
                                    <p className="StatHeader" style={{color: "#25783b"}}>Quizlets</p>
                                </div>: null }
                                
                            </div> 
                        </div>
                    </div>:
                    null}
                    
                </div>
            );
        })
    
        return (
            <div style={!this.props.smg ? {minHeight: '800px'}: null}>
                {RenderSubEvents}
            </div>
        );
    }

    

}

export default EventLister;