import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';


import './CardBody.css';


const cardBody = (props) => {

    const cardElementsObject = {
        'COMPETITIVE EVENTS': 'Click Here to Explore the Competitive Events that DECA Offers, including Guidelines, Winning Examples, Study Resources, and More.',
        'MEMBERSHIP': 'Want to become a member of Reedy DECA? Click Here to Learn More About the Registration Process.',
        'OFFICERS': 'Click Here to Learn More about the Awesome Team we have running Reedy DECA this Year, including Positions, Recognized ICDC Qualifier, and Contact Information.',
        'CALENDAR': 'Click Here to Learn More about Upcoming Reedy DECA Events, including Socials, Meetings, Competition Dates, and Programs.',
        'STORE': 'Working or Want to work at the School Store? Click Here to Log your Hours and Learn More about our Menu, Hours Open, Training Program, and Volunteer Hour Distribution.',
        'CONTACT': 'Click Here to Contact Reedy DECA if You Have Any Questions or Follow our Social Medias.'
    }

    const cardElements = Object.keys(cardElementsObject).map((element) => {
        return (
            <a href={"/" + element.toLowerCase()} style={{textDecoration:'none'}}>
                <div class="tabCard">
                    <p class="tabHeaderText"><b>{element}</b></p>
                    <p class="tabBodyText">{cardElementsObject[element]}</p>
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
            <div class="cardBody">
                {cardElements}
            </div>
            <div class="footer"/>
        </div>
    );

}

export default cardBody;