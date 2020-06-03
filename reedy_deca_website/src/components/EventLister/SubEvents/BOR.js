import React from 'react';

import EventListerPBA from '../EventListerPBA/EventListerPBA';
import JumbotronUniversal from '../../UI/JumbotronUniversal/JumbotronUniversal';
import RulesBar from '../EventListerPBA/RulesBar/RulesBar';
import DescriptionBar from '../../UI/DescriptionBar/DescriptionBar';

const bor = (props) => {

    const bor_total_info = {
        'Rules': {
            'Participants': "1 to 3",
            'Exam': '20 (or Less) Page Written Entry',
            'Judge': 'Present Research and Plan',
            'Interview Time': 15
        },
        'SubEvents': {
            'Business Services Operations': {
                'Description': 'Business Services includes human resources, information technology and personal and contracted services businesses.',
                'ParticipancyDistrict': 16,
                'ParticipancyState': 41,
                'Success': 8,
            },
            'Buying and Merchandising Operations': {
                'Description': 'Buying and Merchandising includes retail and wholesale businesses that provide consumer goods.',
                'ParticipancyDistrict': 12,
                'ParticipancyState': 43,
                'Success': 8,
            },
            'Finance Operations': {
                'Description': 'Finance includes banks, credit unions, accounting, investments and other financial businesses.',
                'ParticipancyDistrict': 12,
                'ParticipancyState': 28,
                'Success': 8,
            },
            'Hospitality and Tourism Operations': {
                'Description': 'Hospitality and Tourism includes hotels, restaurants and tourism-related businesses.',
                'ParticipancyDistrict': 'N/A',
                'ParticipancyState': 43,
                'Success': 8,
            },
            'Sports and Entertainment Marketing Operations': {
                'Description': 'Sports and Entertainment Marketing includes businesses that conduct sporting and/or entertainment events.',
                'ParticipancyDistrict': 9,
                'ParticipancyState': 37,
                'Success': 8,
            },
        }
    }

    return (
        <div>
            <JumbotronUniversal>BUSINESS OPERATIONS RESEARCH</JumbotronUniversal>
            <DescriptionBar>DECA’s Business Operations Research Events provide opportunities 
                for participants to demonstrate knowledge and skills needed by management 
                personnel. Students conduct actual research studies in their communities.</DescriptionBar>
            <RulesBar rules={bor_total_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2019/07/HS_BOR_Guidelines.pdf" ppc="https://www.deca.org/wp-content/uploads/2018/07/Penalty-Point-Checklist.pdf"/>
            <EventListerPBA info={bor_total_info['SubEvents']} pronoun="people"/>
        </div>
        
    );

}

export default bor;