import React from 'react';

import EventListerPBA from '../EventListerPBA/EventListerPBA';
import JumbotronUniversal from '../../UI/JumbotronUniversal/JumbotronUniversal';
import RulesBar from '../EventListerPBA/RulesBar/RulesBar';
import DescriptionBar from '../../UI/DescriptionBar/DescriptionBar';

const imc = (props) => {

    const imc_total_info = {
        'Rules': {
            'Participants': '1 to 3',
            'Exam': 'Marketing Exam',
            'Judge': 'Present Campaign',
            'Interview Time': 15
        },
        'SubEvents': {
            'Integrated Marketing Campaign–Event': {
                'Description': 'Integrated Marketing Campaign—Event includes a campaign that is related to any sports and entertainment event and/or company event. Examples include concerts, festivals, fairs, tournaments, pet adoption day, charity events, etc.',
                'ParticipancyDistrict': 50,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Integrated Marketing Campaign–Product': {
                'Description': 'Integrated Marketing Campaign—Product includes a campaign that is related to any hard/soft line retail products including e-commerce. Examples include apparel and accessories, retail products, etc.',
                'ParticipancyDistrict': 30,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Integrated Marketing Campaign–Service': {
                'Description': 'Integrated Marketing Campaign—Service includes a campaign that is related to any service or intangible product. Examples may include pet services, golf lessons, health care services, salons, restaurants, amusement parks, etc.',
                'ParticipancyDistrict': 39,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
        }
    }

    return (
        <div>
            <JumbotronUniversal>INTEGRATED MARKETING CAMPAIGN</JumbotronUniversal>
            <DescriptionBar>DECA’s Integrated Marketing Campaign Events provide opportunities for members to develop an integrated marketing campaign of no more than 45 days in length for a real event, product or service and present the campaign in a role-play situation.</DescriptionBar>
            <RulesBar rules={imc_total_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2019/07/HS_IMC_Guidelines.pdf" pi="https://www.deca.org/wp-content/uploads/2018/07/HS_Performance_Indicators_Marketing_Cluster.pdf" imc/>
            <EventListerPBA info={imc_total_info['SubEvents']} pronoun="people"/>
        </div>
        
    );

}

export default imc;