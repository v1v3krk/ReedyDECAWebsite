import React from 'react';

import {Alert} from 'react-bootstrap';

import './CardBody.css';

import {
    FaMedal, FaUserPlus, FaUserCircle, FaCalendarAlt, FaStoreAlt, FaAddressBook
} from "react-icons/fa"


const cardBody = (props) => {

    const iconStyle = {
        fontSize: '100px',
        margin: '20px'
    }

    const cardElementsObject = {
        'COMPETITIVE EVENTS': [
            'Click Here to Explore the Competitive Events that DECA Offers, including Guidelines, Winning Examples, Study Resources, and More.',
            <FaMedal className="icon"/>,
            'events'
        ],
        'MEMBERSHIP': [
            'Want to become a member of Reedy DECA? Click Here to Learn More About the Registration Process.',
            <FaUserPlus className="icon"/>,
            'membership'
        ],
        'OFFICERS': [
            'Click Here to Learn More about the Awesome Team we have running Reedy DECA this Year, including Positions, Recognized ICDC Qualifier, and Contact Information.',
            <FaUserCircle className="icon"/>,
            'officers'
        ],
        'CALENDAR': [
            'Click Here to Learn More about Upcoming Reedy DECA Events, including Socials, Meetings, Competition Dates, and Programs.',
            <FaCalendarAlt className="icon"/>,
            'calendar'
        ],
        'SCHOOL STORE': [
            'Working or Want to work at the School Store? Click Here to Log your Hours and Learn More about our Menu, Hours Open, Training Program, and Volunteer Hour Distribution.',
            <FaStoreAlt className="icon"/>,
            'store'
        ],
        'CONTACT': [
            'Click Here to Contact Reedy DECA if You Have Any Questions or Want to Follow our Social Medias.',
            <FaAddressBook className="icon"/>,
            'contact'
        ]
    }

    const cardElements = Object.keys(cardElementsObject).map((element) => {
        return (
            <a href={"/" + cardElementsObject[element][2]} style={{ textDecoration: 'none' }}>
                <div class="tabCard">
                    {cardElementsObject[element][1]}
                    <p class="tabHeaderText"><b>{element}</b></p>
                    <p class="tabBodyText">{cardElementsObject[element][0]}</p>
                </div>
            </a>
        )
    });

    return (
        <div>
            <div class="mission">
                PREPARING EMERGING LEADERS AND
                ENTREPRENEURS IN MARKETING, FINANCE HOSPITALITY,
                AND MANAGEMENT IN HIGH SCHOOLS AND COLLEGES ACROSS THE GLOBE.
            </div>
            <Alert variant="warning" style={{margin: '20px'}}><b>Notice:</b> We Will Be Coming Out With 100 Question Quizlets per Performance Indicator and a Roleplay Chatbot Website Soon. These
                Features are Currently Disabled.</Alert>
            <div class="cardBody">
                {cardElements}
            </div>
        </div>
    );

}

export default cardBody;