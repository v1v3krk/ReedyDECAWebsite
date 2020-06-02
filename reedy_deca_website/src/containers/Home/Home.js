import React, { Component } from 'react';

import MainJumbotron from '../../components/Home/MainJumbotron/MainJumbotron';
import CardBody from '../../components/Home/CardBody/CardBody';


class Home extends Component {

    render() {
        return (
            <div>
                <MainJumbotron />
                <CardBody />
            </div>
        )
    }
}

export default Home;