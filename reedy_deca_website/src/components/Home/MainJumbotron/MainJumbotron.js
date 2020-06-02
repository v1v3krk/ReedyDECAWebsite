import React from 'react';
import { Button }from 'react-bootstrap';
import './MainJumbotron.css';


const mainJumbotron = (props) => {

    return (
        <div class="MainJumbotron">
            <div className="mainer">
                <div className="MainBackground">
                    <p class="headerText">REEDY DECA</p>
                    <p class="motto">WE ARE THE <b>NEXT LEVEL</b></p>
                    <div class="externalLinks">
                        <a href="https://www.texasdeca.org/" target="_blank">
                            <Button variant="primary">
                                TX DECA
                            </Button>
                        </a>
                        <a href="https://www.deca.org/" target="_blank">
                            <Button variant="primary">
                                US DECA
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default mainJumbotron;