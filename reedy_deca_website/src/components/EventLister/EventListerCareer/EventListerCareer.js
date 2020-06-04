import React, { Component } from 'react';

import './EventsListerCareer.css';

import {FaBuilding, FaCity, FaGlobeAmericas, FaAtlas, FaList} from "react-icons/fa"

import { MdGavel } from "react-icons/md";



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
                    <div className="CareerSubEventCard" onClick={() => (this.toggleEvents(igKey))} 
                    style={{borderTop: this.state.openElements.includes(igKey) ? '7px solid #1750ac': '7px solid #25783b'}}>
                        <p className="CareerSubEvent">{element}</p>
                        <p className="CareerSubEventCardDesc">{this.props.info[element]['Description']}</p>
                        <div className="CareerSubEventCardIcons">
                            <div className="CareerSubEventCardDistrict">
                                <div>
                                    <FaBuilding className="CareerStatIcon"/>
                                    <p className="CareerStatHeader">Participants</p>
                                    <p className="CareerStatDesc">District: {this.props.info[element]['ParticipancyDistrict']} {this.props.pronoun}</p>
                                </div>
                            </div>
                            <div className="CareerSubEventCardState">
                                <div>
                                    <FaCity className="CareerStatIcon"/>
                                    <p className="CareerStatHeader">Participants</p>
                                    <p className="CareerStatDesc">State: {this.props.info[element]['ParticipancyState']} {this.props.pronoun}</p>
                                </div>
                            </div>
                            <div className="CareerSubEventCardSuccess">
                                <div>
                                    <FaGlobeAmericas className="CareerStatIcon"/>
                                    <p className="CareerStatHeader">Qualifiers</p>
                                    <p className="CareerStatDesc">ICDC: {this.props.info[element]['Success']} {this.props.pronoun}</p>
                                </div>  
                            </div>
                            <div className="CareerSubEventCardPIS">
                                <a href={this.props.info[element]['PI']} target="_blank" style={{textDecoration:'none'}}>
                                    {!this.props.ee ? 
                                    <div>
                                        <FaList className="CareerStatIcon" style={{color:'#25783b'}}/>
                                        <p className="CareerStatHeader" style={{color:'#25783b'}}>Performance Indicators</p>
                                        <p className="CareerStatDesc" style={{color:'black'}}>(Click Here)</p>
                                    </div>:
                                    <div>
                                        <MdGavel className="CareerStatIcon" style={{color:'#25783b'}}/>
                                        <p className="CareerStatHeader" style={{color:'#25783b'}}>Guidelines</p>
                                        <p className="CareerStatDesc" style={{color:'black'}}>(Click Here)</p>
                                    </div>
                                    }
                                </a>
                            </div>
                            <div className="CareerSubEventCardResources">
                                <div className="CareerlastStat">
                                    <FaAtlas className="CareerStatIcon" style={{color: "#25783b"}}/>
                                    <a href={this.props.info[element]['quizessay']} target="_blank">
                                        <p className="StatHeader" style={{color: "#25783b"}}>{!this.props.essay ? "Quizlets" : "Past Essays"}</p>
                                    </a>
                                    <p className="CareerStatHeader" style={{color: "#25783b"}}>Roleplay Chatbot</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.openElements.includes(igKey) ?
                    <div className="CareerSubEventDesc">
                        <p className="CareerDesc">{this.props.info[element]['Description']}</p>
                        <div className="CareerSubEventStats">
                            <div>
                                <FaBuilding className="CareerStatIcon"/>
                                <p className="CareerStatHeader">Participants</p>
                                <p className="CareerStatDesc">District: {this.props.info[element]['ParticipancyDistrict']} {this.props.pronoun}</p>
                            </div>
                            <div>
                                <FaCity className="CareerStatIcon"/>
                                <p className="CareerStatHeader">Participants</p>
                                <p className="CareerStatDesc">State: {this.props.info[element]['ParticipancyState']} {this.props.pronoun}</p>
                            </div>
                            <div>
                                <FaGlobeAmericas className="CareerStatIcon"/>
                                <p className="CareerStatHeader">Qualifiers</p>
                                <p className="CareerStatDesc">ICDC: {this.props.info[element]['Success']} {this.props.pronoun}</p>
                            </div>
                            <div>
                                <a href={this.props.info[element]['PI']} target="_blank" style={{textDecoration:'none'}}>
                                    {!this.props.ee ? 
                                    <div>
                                        <FaList className="CareerStatIcon" style={{color: "#25783b"}}/>
                                        <p className="CareerStatHeader" style={{color: "#25783b"}}>Performance Indicators</p>
                                        <p className="CareerStatDesc" style={{color:'black'}}>(Click Here)</p>
                                    </div>
                                    :
                                    <div>
                                        <MdGavel className="CareerStatIcon" style={{color: "#25783b"}}/>
                                        <p className="CareerStatHeader" style={{color: "#25783b"}}>Guidelines</p>
                                        <p className="CareerStatDesc"style={{color: "#25783b"}}>(Click Here)</p>
                                    </div>
                                    }
                                </a>
                            </div>   
                            <div className="CareerlastStat">
                                
                                <div>
                                    <FaAtlas className="CareerStatIcon" style={{color: "#25783b"}}/>
                                    <a href={this.props.info[element]['quizessay']} target="_blank">
                                        <p className="StatHeader" style={{color: "#25783b"}}>{!this.props.essay ? "Quizlets" : "Past Essays"}</p>
                                    </a>
                                </div>
                                <div>
                                    <FaAtlas className="CareerStatIcon" style={{color: "#25783b"}}/>
                                    <p className="CareerStatHeader" style={{color: "#25783b"}}>Roleplay Chatbot:</p>
                                </div>
                            </div> 
                        </div>
                    </div>:
                    null}
                    
                </div>
            );
        })
    
        return (
            <div>
                {RenderSubEvents}
            </div>
        );
    }

    

}

export default EventLister;