import React from 'react';

import EventListerCareer from '../EventListerCareer/EventListerCareer';
import JumbotronUniversal from '../../UI/JumbotronUniversal/JumbotronUniversal';
import RulesBarCareer from '../EventListerCareer/RulesBarCareer/RulesBarCareer';
import DescriptionBar from '../../UI/DescriptionBar/DescriptionBar';

const ise = (props) => {

    const ise_total_info = {
        'Rules': {
            'Participants': 1,
            'Exam': 'Career Cluster Exam',
            'Judge': '2 Roleplays; 3rd for Finalists',
            'Prep Time': 10,
            'Interview Time': 10
        },
        'SubEvents': {
            'Accounting Applications': {
                'Description': 'Students will be challenged to perform management functions and tasks focusing on the application of financial data to business planning, including collection and organization of data, development and use of reports, and analysis of data to make business decisions. Concepts include understanding the source and purpose of financial statements, the impact of management decisions on statements, and the analysis and interpretation of data for planning purposes.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/07/HS_Performance_Indicators_Finance_Cluster.pdf'
            },
            'Apparel and Accessories Marketing': {
                'Description': 'Students will be challenged to perform marketing and management functions and tasks in retail establishments, wholesale establishments and/or manufacturing firms primarily engaged in the marketing of clothing and related articles for personal wear and adornment.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/10/HS_Performance_Indicators_Marketing_Cluster.pdf'
            },
            'Automotive Services Marketing': {
                'Description': 'Students will be challenged to perform marketing and management functions and tasks related to auto dealers, service stations and related businesses or auto parts stores',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/10/HS_Performance_Indicators_Marketing_Cluster.pdf'
            },
            'Business Finance': {
                'Description': 'Students will be challenged to perform management functions and tasks focusing on high-level financial and business planning, including collection and organization of data, development and use of reports, and analysis of data to make business decisions. Concepts include understanding the source and purpose of financial statements, the impact of management decisions on statements, and the analysis and interpretation of data for corporate planning purposes.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/07/HS_Performance_Indicators_Finance_Cluster.pdf'
            },
            'Business Services Marketing': {
                'Description': 'Students will be challenged to perform marketing functions and tasks involved in providing services to businesses on a fee or contract basis or providing services to consumers.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/10/HS_Performance_Indicators_Marketing_Cluster.pdf'
            },
            'Entrepreneurship': {
                'Description': 'Students will be challenged to perform the ability to recognize opportunities and to act on them, determine needs, identify markets, utilize marketing research, identify sources of capital and use management skills.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2017/07/HS_Entrepreneurship_Performance_Indicators.pdf'
            },
            'Food Marketing': {
                'Description': 'Students will be challenged to perform marketing and management functions and tasks in retail establishments, wholesale establishments and manufacturing firms resulting in the sale of food.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/10/HS_Performance_Indicators_Marketing_Cluster.pdf'
            },
            'Hotel and Lodging Management': {
                'Description': 'Students will be challenged to perform marketing and management functions and tasks in hotels, motels, lodging services, convention services, and food and beverage services.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/07/HS_Performance_Indicators_Hospitality_Cluster.pdf'
            },
            'Human Resources Management': {
                'Description': 'Students will be challenged to perform management functions and tasks focusing on staffing, recruitment, selection, training, performance appraisal, compensation and safety training.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/07/HS_Performance_Indicators_Business_Mgmt_Cluster.pdf'
            },
            'Marketing Communications': {
                'Description': 'Students will be challenged to perform marketing communications and functions and tasks that inform, persuade, or remind a target market of ideas experiences, goods or services.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/10/HS_Performance_Indicators_Marketing_Cluster.pdf'
            },
            'Quick Serve Restaurant Management': {
                'Description': 'Students will be challenged to perform marketing and management functions and tasks in retail establishments, wholesale establishments and manufacturing firms primarily engaged in the quick-serve restaurant industry.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/07/HS_Performance_Indicators_Hospitality_Cluster.pdf'
            },
            'Restaurant and Food Service Management': {
                'Description': 'Students will be challenged to perform marketing and management functions and tasks in a full-service restaurant or a food-service business.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/07/HS_Performance_Indicators_Hospitality_Cluster.pdf'
            },
            'Retail Merchandising': {
                'Description': 'Students will be challenged to perform marketing and management functions and tasks that can be applied in any retail establishment.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/10/HS_Performance_Indicators_Marketing_Cluster.pdf'
            },
            'Sports and Entertainment Marketing': {
                'Description': 'Students will be challenged to perform marketing and management functions and tasks related to amateur or professional sports or sporting events, entertainment or entertainment events, selling or renting of supplies and equipment (other than vehicles) used for recreational or sporting purposes, products and services related to hobbies or cultural events, or businesses primarily engaged in satisfying the desire to make productive or enjoyable use of leisure time.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
                'PI': 'https://www.deca.org/wp-content/uploads/2018/10/HS_Performance_Indicators_Marketing_Cluster.pdf'
            },
        }
    }

    return (
        <div>
            <JumbotronUniversal>INDIVIDUAL SERIES</JumbotronUniversal>
            <DescriptionBar>DECA’s Individual Series Events effectively measure students’ proficiency in the knowledge and skills identified by occupational practitioners as essential to success in a given career. Participants receive recognition for achievement in each role-play scenario and in the series as a whole.</DescriptionBar>
            <RulesBarCareer rules={ise_total_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2019/07/HS_Series_Guidelines-1.pdf" pi="N/A"/>
            <EventListerCareer info={ise_total_info['SubEvents']} pronoun="teams"/>
        </div>
        
    );

}

export default ise;