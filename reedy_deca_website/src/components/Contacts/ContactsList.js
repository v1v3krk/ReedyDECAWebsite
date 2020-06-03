import React from 'react';

import {FaBell, FaInstagram, FaTwitter, FaUserGraduate, FaEnvelope, FaDoorOpen} from 'react-icons/fa';

import './ContactsList.css';

const contactsList = (props) => {

    const contactElements = {
        'REMIND' : {
            'info': ['Text @reedydeca to 81010'],
            'icon': <FaBell />,
            'color': '#d4af37',
            'link': 'https://www.remind.com/classes/',
            'id': 'remind'
        },
        'GOOGLE CLASSROOM': {
            'info': ['Code: xhoyu8'],
            'icon': <FaUserGraduate />,
            'color':'#20a464',
            'link': 'https://classroom.google.com/u/0/h',
            'id': 'gc'
        },

        'GMAIL': {
            'info': ['reedydeca2@gmail.com','raymondd@friscoisd.org'],
            'icon': <FaEnvelope />,
            'color': '#d44638',
            'link': 'https://mail.google.com/mail/u/0/#inbox',
            'id': 'gmail'
        },
        'ROOM NUMBER': {
            'info': ['B105'],
            'icon': <FaDoorOpen />,
            'color': '#996515',
            'id': 'room'
        },
        'INSTAGRAM': {
            'info': ['@reedydeca'],
            'icon': <FaInstagram />,
            'color': '#dd2a7b',
            'link': 'https://www.instagram.com/reedydeca/',
            'id': 'insta'
        },
        'TWITTER': {
            'info': ['@ReedyDeca','@thereedyden'],
            'icon': <FaTwitter />,
            'color': '#00acee',
            'link': 'https://twitter.com/ReedyDeca',
            'id': 'twitter'
        },
    }

    const contactRenderElements = Object.keys(contactElements)
        .map((element, igKey) => {
            return (
                <a href={contactElements[element]['link']} target="_blank" style={{textDecoration: 'none'}}>
                    <div 
                        id={contactElements[element]['id']} 
                        key={igKey} className="ContactCard" 
                        style={{borderTop: '8px solid' + contactElements[element]['color']}}
                    >
                        <div className="ContactIcon" style={{color: contactElements[element]['color']}}>
                            {contactElements[element]['icon']}
                        </div>
                        <div className="ContactInfo">
                            <div className="ContactInfoHeader" style={{color: contactElements[element]['color']}}>
                                {element}
                            </div>
                            <div className="ContactInfoDesc" style={{color:'black'}}>
                                {contactElements[element]['info'].map(elementii => {
                                    return <div>{elementii}</div>;
                                })}
                            </div>
                            
                        </div>
                    </div>
                </a>
            );
        })

    return (
        <div className="ContactCardHolder">
            {contactRenderElements}
            <div id="form" className="ContactCardForm">
                <div className="ContactForm">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfgiKqdJuwfKGJr0W0Nk9yTrUBhj9qNcLei72VLhZZDMv9M_w/viewform?embedded=true" width="100%" height="425" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </div>
    );

}

export default contactsList;