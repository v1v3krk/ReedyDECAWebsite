import React, { Component } from 'react';

import './EventsCatalog.css';

import DescriptionBar from '../UI/DescriptionBar/DescriptionBar';

import {FaBriefcase, FaUsers, FaUser, FaMoneyCheck, 
    FaSearchDollar, FaTasks, FaMoneyBill, FaMailBulk, FaUserTie, FaWifi} from "react-icons/fa"



class EventsCatalog extends Component {

    render () {

        const iconStyle = {
            fontSize: '100px',
            margin: '20px'
        }

        const EventSectionList = {
            "PRINCIPLES OF BUSINESS ADMINISTRATION": ['pba', 'Exam', <FaBriefcase style={iconStyle}/>],
            "TEAM DECISION":['td','Exam', <FaUsers style={iconStyle}/>],
            "INDIVIDUAL SERIES":['is','Exam', <FaUser style={iconStyle}/>],
            "PERSONAL FINANCIAL LITERACY":['pfl','Exam', <FaMoneyCheck style={iconStyle}/>],
            "BUSINESS OPERATIONS RESEARCH":['bor','Essay', <FaSearchDollar style={iconStyle}/>],
            "PROJECT MANAGEMENT":['pm','Essay', <FaTasks style={iconStyle}/>],
            "ENTREPRENEURSHIP":['e', 'Written', <FaMoneyBill style={iconStyle}/>],
            "INTEGRATED MARKETING CAMPAIGN":['imc','Exam, Essay,', <FaMailBulk style={iconStyle}/>],
            "PROFESSIONAL SELLING AND CONSULTING":['psc','Exam', <FaUserTie style={iconStyle}/>],
            "ONLINE":['o','Essay', <FaWifi style={iconStyle}/>]
        }
        
        const EventRenderList = Object.keys(EventSectionList).map((element, igKey) => {
            return (
                <a href={"/events/" + EventSectionList[element][0]} key={igKey} style={{textDecoration:'none'}}>
                     <div className="EventSection">
                         {EventSectionList[element][2]}
                        <p>{element}</p>
                        <p className="test">{EventSectionList[element][1]} and Roleplay Event</p>
                     </div>
                 </a>
                
            );
        })

        return (
            <div>
                <DescriptionBar><b>WELCOME TO THE COMPETITIVE EVENTS SECTION.</b> <br /><br /> EXPLORE AND CLICK THE OPTIONS BELOW TO EITHER
                    FIND AN EVENT THAT SUITS YOUR SKILLS, LEARN MORE ABOUT YOUR EVENT, OR STUDY FOR IT USING OUR RESOURCES.
                </DescriptionBar>
                <div className="EventsCatalog">
                    {EventRenderList}
                </div>
            </div>
            
        );
    }

    

}

export default EventsCatalog;