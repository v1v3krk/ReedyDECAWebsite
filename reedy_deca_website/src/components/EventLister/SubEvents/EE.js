import React from 'react';

import EventListerCareer from '../EventListerCareer/EventListerCareer';
import JumbotronUniversal from '../../UI/JumbotronUniversal/JumbotronUniversal';
import RulesBarCareer from '../EventListerCareer/RulesBarCareer/RulesBarCareer';
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
                'ParticipancyDistrict': 29,
                'ParticipancyState': 61,
                'Success': 8,
                'PI': 'https://www.deca.org/wp-content/uploads/2019/07/HS_EIP_Guidelines.pdf'
            },
            'Start-Up Business Plan': {
                'Description': 'The purpose of the Start-Up Business Plan Event is to provide an opportunity for the participant to develop and present a proposal to form a business. The event provides an opportunity for a participant to develop and demonstrate mastery of essential knowledge and skills as they apply to the analysis of a business opportunity.',
                'ParticipancyDistrict': 31,
                'ParticipancyState': 63,
                'Success': 8,
                'PI': 'https://www.deca.org/wp-content/uploads/2019/07/HS_ESB_Guidelines.pdf'
            },
        }
    }

    const ee_bottom_info = {
        'Rules': {
            'Participants': '1 to 3',
            'Exam': '20 (or Less) Page Written Entry',
            'Judge': 'Present Proposal Plan',
            'Interview Time': 15
        },
        'SubEvents': {
            'Independent Business Plan': {
                'Description': 'The Independent Business Plan Event involves the development of a comprehensive proposal to start a new business. Any type of business may be used.',
                'ParticipancyDistrict': 13,
                'ParticipancyState': 47,
                'Success': 8,
                'PI': 'https://www.deca.org/wp-content/uploads/2019/07/HS_EIB_Guidelines.pdf'
            },
            'International Business Plan': {
                'Description': 'The International Business Plan Event involves the development of a proposal to start a new business venture in an international setting. Any type of business may be used.',
                'ParticipancyDistrict': "N/A",
                'ParticipancyState': 29,
                'Success': 8,
                'PI': 'https://www.deca.org/wp-content/uploads/2019/07/HS_IBP_Guidelines.pdf'
            },
            'Business Growth Plan': {
                'Description': 'The Business Growth Plan involves the idea generation and strategy development needed to grow an existing business. Participants in the Business Growth Plan will analyze their current business operations and identify opportunities to grow and expand the business.',
                'ParticipancyDistrict': 4,
                'ParticipancyState': 17,
                'Success': 8,
                'PI': 'https://www.deca.org/wp-content/uploads/2019/07/HS_EBG_Guidelines.pdf'
            },
            'Franchise Business Plan': {
                'Description': 'The purpose of the Franchise Business Plan Event is designed for participants to present a comprehensive business plan proposal to buy into an existing franchise. The participant seeks to become a franchisee.',
                'ParticipancyDistrict': 14,
                'ParticipancyState': 41,
                'Success': 8,
                'PI': 'https://www.deca.org/wp-content/uploads/2019/07/HS_EFB_Guidelines.pdf'
            },
        }
    }

    return (
        <div>
            <JumbotronUniversal>ENTREPRENEURSHIP</JumbotronUniversal>
            <DescriptionBar>DECA’s Entrepreneurship Events provide opportunities to explore entrepreneurial concepts from idea generation, business planning, to growing an existing business.</DescriptionBar>
            <RulesBarCareer rules={ee_top_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2018/07/Penalty-Point-Checklist.pdf" ppc="N/A" ee/>
            <EventListerCareer info={ee_top_info['SubEvents']} pronoun="teams" ee/>
            <RulesBarCareer rules={ee_bottom_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2018/07/Penalty-Point-Checklist.pdf" ppc="N/A" ee top/>
            <EventListerCareer info={ee_bottom_info['SubEvents']} pronoun="teams" ee/>
        </div>
        
    );

}

export default ee;