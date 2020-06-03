import React from 'react';

import EventListerPBA from '../EventListerPBA/EventListerPBA';
import JumbotronUniversal from '../../UI/JumbotronUniversal/JumbotronUniversal';
import RulesBar from '../EventListerPBA/RulesBar/RulesBar';
import DescriptionBar from '../../UI/DescriptionBar/DescriptionBar';

const onl = (props) => {

    const onl_top_info = {
        'Rules': {
            'Participants': '1 to 3',
            'Exam': '10 (or Less) Pages Written Entry',
            'Judge': 'Present Portfolio',
            'Interview Time': 15
        },
        'SubEvents': {
            'Stock Market Game': {
                'Description': 'Participants in the Stock Market Game develop and manage an investment portfolio. Each participating team manages all aspects of the portfolio including stock selection, buying and selling. The goal of the competition is to increase the value of the beginning portfolio.',
                'ParticipancyDistrict': "N/A",
                'ParticipancyState': "N/A",
                'Success': 25,
            },
        }
    }

    const onl_bottom_info = {
        'Rules': {
            'Participants': '1 to 3',
            'Exam': 'None',
            'Judge': 'None',
            'Interview Time': 'None'
        },
        'SubEvents': {
            'Virtual Business Challenge-Accounting': {
                'Description': 'In the VBC Accounting track, participants will use forensic accounting to identify fraud & errors and use managerial accounting techniques to maximize profits. Participants will analyze accounting documents such as T-accounts, worksheets, journals & the general ledger as well as source documents such as time sheets, customer invoices, pay records and more in order to identify issues.',
                'ParticipancyDistrict': "N/A",
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Virtual Business Challenge-Fashion': {
                'Description': 'In the VBC Fashion track, participants will scour runway and street blogs for emerging and viral fashion trends; manage marketing, business and fashion-specific concepts such as design, buying, pricing and markdowns, social media promotion, window display and merchandising within their own fashion design business; and interpret actions, charts and reports, such as the Income Statement and the “Instatrend” report in order to make strategic marketing decisions for their fashion business to optimize profitability.',
                'ParticipancyDistrict': "N/A",
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Virtual Business Challenge-Hotel Management': {
                'Description': 'In the VBC Hotel Management track, participants will manage various aspects of a hotel such as determining room rates, making bids on group sales and setting front desk and housekeeping staffing schedules. Participants will monitor their competitors, analyze various reports and financial information as well as keep a close watch on ratings and social media feedback.',
                'ParticipancyDistrict': "N/A",
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Virtual Business Challenge-Personal Finance': {
                'Description': 'In the VBC Personal Finance track, participants will manage bank accounts, credit and debit cards, bills, credit scores, taxes, insurance and investing. Participants will interpret actions, charts and graphs to make strategic financial decisions and optimize net worth.',
                'ParticipancyDistrict': "N/A",
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Virtual Business Challenge-Restaurant': {
                'Description': 'In the VBC Restaurant track, participants will manage specific marketing and business concepts such as market research, menu design and pricing, advertising strategies and purchasing within a restaurant. Participants will interpret actions, reports and financial information in order to make strategic marketing decisions for their restaurant to optimize profitability.',
                'ParticipancyDistrict': "N/A",
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Virtual Business Challenge-Retail': {
                'Description': 'In the VBC Retailing track, participants will manage specific marketing concepts such as pricing, purchasing and promotion within a convenience store. Participants will interpret actions, charts and graphs in order to make strategic marketing decisions for their store to optimize profitability.',
                'ParticipancyDistrict': "N/A",
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
            'Virtual Business Challenge-Sports': {
                'Description': 'In the VBC Sports track, participants will manage specific marketing concepts such as ticket pricing, media planning and sponsorships within a football franchise. Participants will interpret actions, charts and graphs in order to make strategic marketing decisions for their franchise to optimize profitability.',
                'ParticipancyDistrict': "N/A",
                'ParticipancyState': "N/A",
                'Success': "N/A",
            },
        }
    }

    return (
        <div>
            <JumbotronUniversal>ONLINE</JumbotronUniversal>
            <DescriptionBar>DECA’s Online Events provide opportunities for students to participate in online simulations to learn how to invest in the stock market, manage personal finances, or operate a business venture.</DescriptionBar>
            <RulesBar rules={onl_top_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2019/07/HS_SMG_Guidelines.pdf" ppc="https://www.deca.org/wp-content/uploads/2018/07/Penalty-Point-Checklist.pdf"/>
            <EventListerPBA info={onl_top_info['SubEvents']} pronoun="people" smg/>
            <RulesBar rules={onl_bottom_info['Rules']} guidelines="https://www.deca.org/wp-content/uploads/2019/07/HS_VBC_Guidelines.pdf" ppc="https://www.deca.org/wp-content/uploads/2018/07/Penalty-Point-Checklist.pdf" smg/>
            <EventListerPBA info={onl_bottom_info['SubEvents']} pronoun="people"/>
        </div>
        
    );

}

export default onl;