import React from 'react';

import EventListerPBA from '../EventListerPBA/EventListerPBA';
import JumbotronUniversal from '../../UI/JumbotronUniversal/JumbotronUniversal';
import RulesBar from '../EventListerPBA/RulesBar/RulesBar';
import DescriptionBar from '../../UI/DescriptionBar/DescriptionBar';

const pm = (props) => {

    const pm_total_info = {
        'Rules': {
            'Participants': '1 to 3',
            'Exam': '20 (or Less) Page Written Entry',
            'Judge': 'Present Project',
            'Interview Time': 15
        },
        'SubEvents': {
            'Business Solutions Project': {
                'Description': 'TThe Business Solutions Project uses the project management process to work with a local business or organization to identify a specific problem with the current business operations and implement a solution. Examples include talent acquisition, employee on-boarding, policies and procedures, technology integration, customer service improvement, safety operations, marketing and promotion activities, and productivity and output enhancement.',
                'ParticipancyDistrict': 50,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Career Development Project': {
                'Description': 'The Career Development Project uses the project management process to promote/educate the knowledge and skills needed for careers in marketing, finance, hospitality, management and entrepreneurship. Examples include career fairs, summer boot camps, professional dress seminars, résumé development workshops, career exploration initiatives, mock interviews, educational paths, career paths, workplace re-entry and mentor programs.',
                'ParticipancyDistrict': 30,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Community Awareness Project': {
                'Description': 'The Community Awareness Project uses the project management process to raise awareness for a community issue or cause. Examples include day of service, distracted driving, driving under the influence, bullying, disease awareness, mental health awareness, drug awareness, ethics, environmental and green issues, and vaping. ',
                'ParticipancyDistrict': 39,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Community Giving Project': {
                'Description': 'The Community Giving Project uses the project management process to raise funds or collect donations to be given to a cause/charity. Examples include food bank donations, homeless shelter donations, 5K’s, sports tournaments, auctions, banquets, item collections, holiday drives, adopt a families, etc.',
                'ParticipancyDistrict': 48,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Financial Literacy Project': {
                'Description': 'The Financial Literacy Project uses the project management process to promote the importance of financial literacy, including spending and saving, credit and debt, employment and income, investing, risk and insurance and financial decision making. Examples include organizing and implementing seminars for students (elementary, middle, high and post-secondary), tax preparation assistance, retirement planning, and student loan workshops.',
                'ParticipancyDistrict': 39,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Sales Project': {
                'Description': 'The Sales Project uses the project management process to raise funds for the local DECA chapter. Examples include sports tournaments, t-shirt sales, 5K’s, school merchandise sales, catalog sales, sponsorship development initiatives, fashion shows, pageants, restaurant nights, value cards, and yearbook sales.',
                'ParticipancyDistrict': 48,
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
        }
    }

    return (
        <div>
            <JumbotronUniversal>PROJECT MANAGEMENT</JumbotronUniversal>
            <DescriptionBar>DECA’s Project Management Events require participants to use project management skills to initiate, plan, execute, monitor and control, and close a project.</DescriptionBar>
            <RulesBar rules={pm_total_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2019/07/HS_PME_Guidelines.pdf" ppc="https://www.deca.org/wp-content/uploads/2018/07/Penalty-Point-Checklist.pdf"/>
            <EventListerPBA info={pm_total_info['SubEvents']} pronoun="teams"/>
        </div>
        
    );

}

export default pm;