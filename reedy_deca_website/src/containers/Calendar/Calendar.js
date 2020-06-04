import React, { Component } from 'react';

import JumbotronUniversal from '../../components/UI/JumbotronUniversal/JumbotronUniversal';
import DescriptionBar from '../../components/UI/DescriptionBar/DescriptionBar';

import './Calendar.css';

class Calendar extends Component {

    render() {
        return (
            <div>
                <JumbotronUniversal>CALENDAR</JumbotronUniversal>
                <DescriptionBar>Check Out the Reedy DECA Calendar Below to See When We Have Competitions, Socials, Programs, and More!
                </DescriptionBar>
                <div style={{padding: '20px'}}>
                <iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=cmVlZHlkZWNhMkBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y2xhc3Nyb29tMTEzMzgwMDY3MTkzNjU5MzkwMjY3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%239E69AF&amp;color=%230B8043&amp;showTitle=0&amp;showNav=1&amp;showDate=0&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=1&amp;showTz=0&amp;mode=AGENDA" className="AgendaView" frameborder="0" scrolling="no"></iframe>
                </div>
                <div style={{padding: '20px'}}>
                <iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=cmVlZHlkZWNhMkBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y2xhc3Nyb29tMTEzMzgwMDY3MTkzNjU5MzkwMjY3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%239E69AF&amp;color=%230B8043&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=1&amp;showTz=0&amp;mode=MONTH" className="MonthView" frameborder="0" scrolling="no"></iframe>
                </div>
            </div>
            
        )
    }
}

export default Calendar;