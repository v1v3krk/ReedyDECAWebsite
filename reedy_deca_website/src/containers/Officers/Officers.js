import React, { Component } from 'react';

import JumbotronUniversal from '../../components/UI/JumbotronUniversal/JumbotronUniversal';
import OfficerList from '../../components/Officers/OfficerList';

class Officers extends Component {

    render() {
        return (
            <div>
                <JumbotronUniversal>
                    OFFICERS
                </JumbotronUniversal>
                <OfficerList />
            </div>
            
        )
    }
}

export default Officers;