import React from 'react';

import {FaBell, FaInstagram, FaTwitter, FaUserGraduate} from 'react-icons/fa';

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
            'link': 'https://classroom.google.com/u/1/h',
            'id': 'gc'
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
        }
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
            <div id="form" className="ContactCard">
                <div className="ContactForm">
                    Form
                </div>
            </div>
            {contactRenderElements}
        </div>
    );

}

export default contactsList;