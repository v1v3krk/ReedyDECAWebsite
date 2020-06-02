import React from 'react';

import './JumbotronUniversal.css';

const eventsJumbotron = (props) => {

    return (
        <div className="EventsJumbotron">
            <div className="mainerEvents">
                <div className="EventBackground">
                    <p className="headerEventsText">{props.children}</p>
                </div>
            </div>
        </div>
    );

}

export default eventsJumbotron;