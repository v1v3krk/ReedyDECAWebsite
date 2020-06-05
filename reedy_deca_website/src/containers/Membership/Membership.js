import React, { Component } from 'react';
import './Membership.css';

import JumbotronUniversal from '../../components/UI/JumbotronUniversal/JumbotronUniversal';
import DescriptionBar from '../../components/UI/DescriptionBar/DescriptionBar';

class Membership extends Component {

    render() {
        return (
            <div>
                <JumbotronUniversal>MEMBERSHIP</JumbotronUniversal>
                <DescriptionBar>If You Would Like to be a Member of Reedy DECA, Fill Out the Membership Form Once, and Continue to Fill Out
                    The Attendance Form Whenever You Attend a Meeting.
                </DescriptionBar>
                <div className="memberforms">
                    <div className="memberform">
                        <div className="formheadermem">
                            <h3>Membership</h3>
                        </div>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc9zi6aEGlnplXLj76IcUc8gIHKGVCXJLUkGOvsCS2wbAHodw/viewform?embedded=true" className="actualform" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                    <div className="memberform">
                        <div className="formheaderatt">
                            <h3>Attendance</h3>
                        </div>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfda8bDxhK0qLjkNhe8IIm1k-Zb3YNWfnz4MTybX3d7rfQZSw/viewform?embedded=true" className="actualform" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Membership;