import React, { Component } from 'react';
import './Store.css';

import {Alert} from 'react-bootstrap';

import JumbotronUniversal from '../../components/UI/JumbotronUniversal/JumbotronUniversal';
import DescriptionBar from '../../components/UI/DescriptionBar/DescriptionBar';

class Store extends Component {

    render() {
        return (
            <div>
                <JumbotronUniversal>SCHOOL STORE</JumbotronUniversal>
                <DescriptionBar>If You Would Like to Volunteer at the School Store, You are Required By the District to Attend a Quick 30 minute Training
                    Demonstration. Please Fill Out the Training Form to Sign Up for Training on an Alotted Time Slot. Please fill out the Volunteer Hour Log Form
                    at the END of Every Month If You Have Volunteer Hours Earned from Reedy DECA Activities that We Need To Approve. 
                    <p>&nbsp;</p>
                    If You Have Any Questions, Please Email: reedydeca2@gmail.com.
                </DescriptionBar>
                <Alert variant="danger" style={{margin: '15px'}}><b>NOTE:</b> We WILL Ignore Your Volunteer Hour Log Form
                    Response If We See that The Timestamp is NOT on the Last Day of the Month. </Alert>
                <div className="storememberforms">
                    <div className="storememberform">
                        <div className="storeformheadermem">
                            <h3>Training Sign-Up</h3>
                        </div>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfRuUnTDcZhn77B7GAiojntj8VmNEhX-mGKGQcvyEfiovAubg/viewform?embedded=true" className="storeactualform" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                    <div className="storememberform">
                        <div className="storeformheaderatt">
                            <h3>Log Your Volunteer Hours</h3>
                        </div>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeNelNefvTYQETHOwrrVr5I6sFKh3l3ADLmulrY943mNVnehA/viewform?embedded=true" className="storeactualform" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Store;