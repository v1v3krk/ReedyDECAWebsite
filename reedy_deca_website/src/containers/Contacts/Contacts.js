import React, { Component } from 'react';

import JumbotronUniversal from '../../components/UI/JumbotronUniversal/JumbotronUniversal';
import DescriptionBar from '../../components/UI/DescriptionBar/DescriptionBar';
import ContactsList from '../../components/Contacts/ContactsList';

class Contacts extends Component {

    render() {
        return (
            <div>
                <JumbotronUniversal>CONTACT INFORMATION</JumbotronUniversal>
                <DescriptionBar>
                </DescriptionBar>
                <ContactsList />
            </div>
            
        )
    }
}

export default Contacts;