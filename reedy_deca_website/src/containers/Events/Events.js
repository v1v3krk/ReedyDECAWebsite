import React, { Component } from 'react';

import JumbotronUniversal from '../../components/UI/JumbotronUniversal/JumbotronUniversal';
import EventsCatalog from '../../components/Events/EventsCatalog';

class Events extends Component {

    render() {
        return (
            <div>
                <JumbotronUniversal>COMPETITIVE EVENTS</JumbotronUniversal>
                <EventsCatalog />
            </div>
            
        )
    }
}

export default Events;