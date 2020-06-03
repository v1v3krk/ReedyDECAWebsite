import React, { Component } from 'react';

import JumbotronUniversal from '../../components/UI/JumbotronUniversal/JumbotronUniversal';
import DescriptionBar from '../../components/UI/DescriptionBar/DescriptionBar';
import ContactsList from '../../components/Contacts/ContactsList';

class Contacts extends Component {

    render() {
        return (
            <div>
                <JumbotronUniversal>CONTACT INFORMATION</JumbotronUniversal>
                <DescriptionBar>Click the Cards Below to Follow our Socials, Set Up Educational Resources, and Contact Us!
                </DescriptionBar>
                <ContactsList />
            </div>
            
        )
    }
}

export default Contacts;