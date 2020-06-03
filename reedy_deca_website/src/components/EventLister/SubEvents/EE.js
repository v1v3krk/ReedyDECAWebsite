import React from 'react';

import EventListerPBA from '../EventListerPBA/EventListerPBA';
import JumbotronUniversal from '../../UI/JumbotronUniversal/JumbotronUniversal';
import RulesBar from '../EventListerPBA/RulesBar/RulesBar';
import DescriptionBar from '../../UI/DescriptionBar/DescriptionBar';

const ee = (props) => {

    const ee_top_info = {
        'Rules': {
            'Participants': '1 to 3',
            'Exam': '10 (or Less) Page Written Entry',
            'Judge': 'Present Plan',
            'Interview Time': 15
        },
        'SubEvents': {
            'Innovation Plan': {
                'Description': 'The Innovation Plan Event involves the idea generation and opportunity recognition needed to take advantage of market opportunities to introduce a new business, product or service. Any type of business, product or service may be used.',
                'ParticipancyDistrict': 50,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Start-Up Business Plan': {
                'Description': 'The purpose of the Start-Up Business Plan Event is to provide an opportunity for the participant to develop and present a proposal to form a business. The event provides an opportunity for a participant to develop and demonstrate mastery of essential knowledge and skills as they apply to the analysis of a business opportunity.',
                'ParticipancyDistrict': 30,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
        }
    }

    return (
        <div>
            <JumbotronUniversal>ENTREPRENEURSHIP</JumbotronUniversal>
            <DescriptionBar>DECA’s Principles of Business Administration Events measure the student’s proficiency 
                in those knowledge and skills identified by career practitioners as common academic and 
                technical content across marketing, finance, hospitality, and business management and administration. 
                The Principles of Business Administration Events are designed for first-year DECA members who are enrolled in introductory-level 
                principles of marketing/business courses.</DescriptionBar>
            <RulesBar rules={ee_top_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2019/07/HS_PBA_Guidelines.pdf" ppc="https://www.deca.org/wp-content/uploads/2019/07/HS_PBA_Guidelines.pdf"/>
            <EventListerPBA info={ee_top_info['SubEvents']} pronoun="teams"/>
        </div>
        
    );

}

export default ee;