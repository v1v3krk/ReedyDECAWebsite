import React from 'react';

import EventListerPBA from '../EventListerPBA/EventListerPBA';
import JumbotronUniversal from '../../UI/JumbotronUniversal/JumbotronUniversal';
import RulesBar from '../EventListerPBA/RulesBar/RulesBar';
import DescriptionBar from '../../UI/DescriptionBar/DescriptionBar';

const pfl = (props) => {

    const pfl_total_info = {
        'Rules': {
            'Participants': 1,
            'Exam': 'Financial Literacy Exam',
            'Judge': '1 Roleplay; 2nd for Finalists',
            'Prep Time': 10,
            'Interview Time': 10
        },
        'SubEvents': {
            'Personal Financial Literacy': {
                'Description': 'Students will be assessed on their knowledge of areas such as: financial responsibility and decision making, income and careers, planning and money management, credit and debt, risk management and insurance, and saving and investing.',
                'ParticipancyDistrict': 50,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
        }
    }

    return (
        <div>
            <JumbotronUniversal>PERSONAL FINANCIAL LITERACY</JumbotronUniversal>
            <DescriptionBar>DECA’s Personal Financial Literacy Event measures the personal finance knowledge 
                and skills that K-12 students should possess. The Personal Financial Literacy Event is 
                designed to measure the student’s ability to apply reliable information and systematic 
                decision making to personal financial decisions. The Personal Financial Literacy Event is 
                designed for DECA members who are enrolled in personal finance and financial literacy courses.</DescriptionBar>
            <RulesBar rules={pfl_total_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2019/07/HS_PFL_Guidelines.pdf" pi="https://www.deca.org/wp-content/uploads/2015/08/HS_Financial_Literacy_Performance_Indicators.pdf"/>
            <EventListerPBA info={pfl_total_info['SubEvents']} pronoun="people"/>
        </div>
        
    );

}

export default pfl;;