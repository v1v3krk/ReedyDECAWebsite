import React from 'react';

import EventListerCareer from '../EventListerCareer/EventListerCareer';
import JumbotronUniversal from '../../UI/JumbotronUniversal/JumbotronUniversal';
import RulesBarCareer from '../EventListerCareer/RulesBarCareer/RulesBarCareer';
import DescriptionBar from '../../UI/DescriptionBar/DescriptionBar';

const psc = (props) => {

    const psc_total_info = {
        'Rules': {
            'Participants': 1,
            'Exam': 'Career Cluster Exam',
            'Judge': 'Consultation or Sales Presentation',
            'Interview Time': 15
        },
        'SubEvents': {
            'Financial Consulting': {
                'Description': 'For 2019-2020 you will assume the role of a financial consultant. A client has scheduled a meeting with you because he/she would like to learn more about the online features available from your organization for financial management. The client would like for you to share and explain different online customization tools for banking and portfolio management.',
                'ParticipancyDistrict': 27,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/07/HS_Performance_Indicators_Finance_Cluster.pdf'
            },
            'Hospitality and Tourism Professional Selling': {
                'Description': 'For 2019-2020 you will assume the role of director of sponsorships for a local event taking place within your community. You are meeting with a local business that has interest in becoming a sponsor of the event. In the meeting, you should explain the sponsorship program, various sponsorship packages available and recommend the sponsorship level appropriate to the business.',
                'ParticipancyDistrict': 32,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/07/HS_Performance_Indicators_Hospitality_Cluster.pdf'
            },
            'Professional Selling': {
                'Description': 'For 2019-2020 you will assume the role of a sales representative of a cloud-based technology firm that specializes in workplace collaboration, productivity and project management. The chief operations officer of a new startup has scheduled a meeting with you because he/she has a desire to implement this technology within the startup, which has 25 employees. The chief operations officer wants to learn about your technology solution’s features and why your solution is superior to its competitors.',
                'ParticipancyDistrict': 36,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/07/HS_Performance_Indicators_Marketing_Cluster.pdf'
            },
        }
    }

    return (
        <div>
            <JumbotronUniversal>PROFESSIONAL SELLING AND CONSULTING</JumbotronUniversal>
            <DescriptionBar>DECA’s Professional Selling and Consulting Events provide an opportunity for participants to demonstrate skills needed for a career in sales and/or consulting. Participants will organize and deliver a sales presentation or consultation for one or more products/services/customers.</DescriptionBar>
            <RulesBarCareer rules={psc_total_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2019/07/HS_PSCE_Guidelines-1.pdf" ppc="N/A"/>
            <EventListerCareer info={psc_total_info['SubEvents']} pronoun="teams"/>
        </div>
        
    );

}

export default psc;