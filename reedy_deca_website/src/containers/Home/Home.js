import React, { Component } from 'react';

import MainJumbotron from '../../components/Home/MainJumbotron/MainJumbotron';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import CardBody from '../../components/Home/CardBody/CardBody';


class Layout extends Component {

    render() {
        return (
            <div>
                <ToolBar />
                <MainJumbotron />
                <CardBody />
            </div>
        )
    }
}

export default Layout;