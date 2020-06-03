import React from 'react';

import EventListerPBA from '../EventListerPBA/EventListerPBA';
import JumbotronUniversal from '../../UI/JumbotronUniversal/JumbotronUniversal';
import RulesBar from '../EventListerPBA/RulesBar/RulesBar';
import DescriptionBar from '../../UI/DescriptionBar/DescriptionBar';

const td = (props) => {

    const td_total_info = {
        'Rules': {
            'Participants': 2,
            'Exam': 'Career Cluster Exam',
            'Judge': '1 Case Study; 2nd for Finalists',
            'Prep Time': 30,
            'Interview Time': 15
        },
        'SubEvents': {
            'Business Law and Ethics': {
                'Description': 'For the purposes of this event, business law is U.S. law and will include contracts, product liability, employment and types of business ownership. The ethics component involves evaluating competing social values that may reasonably be argued from either side.',
                'ParticipancyDistrict': 27,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Buying and Merchandising': {
                'Description': 'Employees in buying and merchandising positions get the product into the hands of the customer. This process includes forecasting, planning, buying, displaying, selling and providing customer service.',
                'ParticipancyDistrict': 32,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Entrepreneurship': {
                'Description': 'Entrepreneurship includes the ability to recognize opportunities and to act on them, determine needs, identify markets, utilize marketing research, identify sources of capital and use management skills.',
                'ParticipancyDistrict': 36,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Financial Services': {
                'Description': 'Financial services refer to services offered in the finance industry by financial institutions. Concepts include understanding the source and purpose of financial statements, the impact of management decisions on statements, and the analysis and interpretation of data for planning purposes.',
                'ParticipancyDistrict': 21,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Hospitality Services': {
                'Description': 'Hospitality services include marketing and management functions and tasks that can be applied in hotels, motels, lodging services, related convention services, and related food and beverage services.',
                'ParticipancyDistrict': 42,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Marketing Management': {
                'Description': 'Marketing management includes marketing and management functions and tasks that can be applied broadly in a non-retail marketing environment.',
                'ParticipancyDistrict': "N/A",
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Sports and Entertainment Marketing': {
                'Description': 'Sports and entertainment marketing includes marketing functions and tasks that can be applied in amateur or professional sports or sporting events, entertainment or entertainment events, selling or renting of supplies and equipment (other than vehicles) used for recreational or sporting purposes, products and services related to hobbies or cultural events, or businesses primarily engaged in satisfying the desire to make productive or enjoyable use of leisure time.',
                'ParticipancyDistrict': 41,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Travel and Tourism': {
                'Description': 'Travel and tourism includes marketing and management functions and tasks that can be applied in enterprises engaged in passenger transportation, travel service, attracting and serving the traveling public, arranging tours or acting as independent ticket agencies, and other services incidental to the travel or tourism industry.',
                'ParticipancyDistrict': 26,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
        }
    }

    return (
        <div>
            <JumbotronUniversal>Team Decision</JumbotronUniversal>
            <DescriptionBar>DECA’s Team Decision Making Events provide an opportunity for participants to analyze one or a 
                combination of elements essential to the effective operation of a business in the specific career area. 
                The business situation to be analyzed will be presented as a case study.</DescriptionBar>
            <RulesBar rules={td_total_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2019/07/HS_Team_Guidelines.pdf" pi=""/>
            <EventListerPBA info={td_total_info['SubEvents']} pronoun="teams"/>
        </div>
        
    );

}

export default td;