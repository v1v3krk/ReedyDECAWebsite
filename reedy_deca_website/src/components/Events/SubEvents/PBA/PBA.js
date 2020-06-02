import React from 'react';

import EventLister from '../../EventLister/EventLister';
import JumbotronUniversal from '../../../UI/JumbotronUniversal/JumbotronUniversal';
import RulesBar from '../../EventLister/RulesBar/RulesBar';
import DescriptionBar from '../../../UI/DescriptionBar/DescriptionBar';

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
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Principles of Finance': {
                'Description': 'The business situation will use language associated with careers in Accounting, Banking Services, Business Finance, Insurance and Securities, and Investments.',
                'ParticipancyDistrict': 30,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Principles of Hospitality and Tourism': {
                'Description': 'The business situation will use language associated with careers in Hotels, Restaurants, and Tourism and Travel.',
                'ParticipancyDistrict': 39,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Principles of Marketing': {
                'Description': 'The business situation will use language associated with careers in Marketing Communications, Marketing Management, Marketing Research, Merchandising and Professional Selling.',
                'ParticipancyDistrict': 48,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
        }
    }

    return (
        <div>
            <JumbotronUniversal>Principles of Business Administration</JumbotronUniversal>
            <DescriptionBar>DECA’s Principles of Business Administration Events measure the student’s proficiency 
                in those knowledge and skills identified by career practitioners as common academic and 
                technical content across marketing, finance, hospitality, and business management and administration. 
                The Principles of Business Administration Events are designed for first-year DECA members who are enrolled in introductory-level 
                principles of marketing/business courses.</DescriptionBar>
            <RulesBar rules={pba_total_info['Rules']}/>
            <EventLister info={pba_total_info['SubEvents']}/>
        </div>
        
    );

}

export default pba;