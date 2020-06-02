import React from 'react';

import './DescriptionBar.css';

const descriptionBar = (props) => {

    return (
        <div className="DescriptionBar">
            {props.children}
        </div>
    );

}

export default descriptionBar;