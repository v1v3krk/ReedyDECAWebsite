import React from 'react';

import EventListerPBA from '../EventListerPBA/EventListerPBA';
import JumbotronUniversal from '../../UI/JumbotronUniversal/JumbotronUniversal';
import RulesBar from '../EventListerPBA/RulesBar/RulesBar';
import DescriptionBar from '../../UI/DescriptionBar/DescriptionBar';

const pba = (props) => {

    const pba_total_info = {
        'Rules': {
            'Participants': 1,
            'Exam': 'Business Administration Core Exam',
            'Judge': '1 Roleplay; 2nd for Finalists',
            'Prep Time': 10,
            'Interview Time': 10
        },
        'SubEvents': {
            'Principles of Business Management and Administration': {
                'Description': 'The business situation will use language associated with careers in Administrative Services, Business Information Management, General Management, Human Resources Management, and Operations Management.',
                'ParticipancyDistrict': 50,
                'ParticipancyState': 98,
                'Success': 10,
            },
            'Principles of Finance': {
                'Description': 'The business situation will use language associated with careers in Accounting, Banking Services, Business Finance, Insurance and Securities, and Investments.',
                'ParticipancyDistrict': 30,
                'ParticipancyState': 90,
                'Success': 10,
            },
            'Principles of Hospitality and Tourism': {
                'Description': 'The business situation will use language associated with careers in Hotels, Restaurants, and Tourism and Travel.',
                'ParticipancyDistrict': 39,
                'ParticipancyState': 99,
                'Success': 10,
            },
            'Principles of Marketing': {
                'Description': 'The business situation will use language associated with careers in Marketing Communications, Marketing Management, Marketing Research, Merchandising and Professional Selling.',
                'ParticipancyDistrict': 48,
                'ParticipancyState': 97,
                'Success': 10,
            },
        }
    }

    return (
        <div>
            <JumbotronUniversal>PRINCIPLES OF BUSINESS ADMINISTRATION</JumbotronUniversal>
            <DescriptionBar>DECA’s Principles of Business Administration Events measure the student’s proficiency 
                in those knowledge and skills identified by career practitioners as common academic and 
                technical content across marketing, finance, hospitality, and business management and administration. 
                The Principles of Business Administration Events are designed for first-year DECA members who are enrolled in introductory-level 
                principles of marketing/business courses.</DescriptionBar>
            <RulesBar rules={pba_total_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2019/07/HS_PBA_Guidelines.pdf" pi="https://www.deca.org/wp-content/uploads/2019/07/HS_PBA_Guidelines.pdf"/>
            <EventListerPBA info={pba_total_info['SubEvents']} pronoun="people"/>
        </div>
        
    );

}

export default pba;