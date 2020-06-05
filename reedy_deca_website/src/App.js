import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {FaInstagram, FaTwitter} from 'react-icons/fa';
import {ReactComponent as LogoIcon} from './assets/icons/SquareLogoBareSVGWhite.svg';


import './App.css';

import ToolBar from './components/Navigation/ToolBar/ToolBar';
import Home from './containers/Home/Home';
import Events from './containers/Events/Events';
import PBA from './components/EventLister/SubEvents/PBA';
import TD from './components/EventLister/SubEvents/TD';
import BOR from './components/EventLister/SubEvents/BOR';
import EE from './components/EventLister/SubEvents/EE';
import ISE from './components/EventLister/SubEvents/IS';
import PFL from './components/EventLister/SubEvents/PFL';
import PM from './components/EventLister/SubEvents/PM';
import IMC from './components/EventLister/SubEvents/IMC';
import PSC from './components/EventLister/SubEvents/PSC';
import ONL from './components/EventLister/SubEvents/ONL';
import Membership from './containers/Membership/Membership';
import Officers from './containers/Officers/Officers';
import Contacts from './containers/Contacts/Contacts';
import Calendar from './containers/Calendar/Calendar';
import Store from './containers/Store/Store';



function App() {
  return (
    <BrowserRouter>
        <header>
          <ToolBar />
        </header>
        <div className="App">
        
        <Route path="/" component={Home} exact/>
        <Route path="/events" component={Events} exact/>
        <Route path="/events/pba" component={PBA} />
        <Route path="/events/td" component={TD} />
        <Route path="/events/bor" component={BOR} />
        <Route path="/events/e" component={EE} />
        <Route path="/events/is" component={ISE} />
        <Route path="/events/pfl" component={PFL} />
        <Route path="/events/pm" component={PM} />
        <Route path="/events/imc" component={IMC} />
        <Route path="/events/psc" component={PSC} />
        <Route path="/events/o" component={ONL} />
        <Route path="/membership" component={Membership} />
        <Route path="/officers" component={Officers} />
        <Route path="/store" component={Store} />
        <Route path="/contact" component={Contacts} />
        <Route path="/calendar" component={Calendar} />
      </div>
      <footer style={{marginTop:'20px', overflow: 'hidden'}}>
          <div class="footer">
            <a href="/" className="brand">
              <div className="footerlogo">
                <LogoIcon class="actualicon"/>
              </div>
              <p className="trademarkphrase" style={{textDecoration: 'none', color:'white'}}>REEDY DECA</p>
            </a>

            <div className="credits">
              <div class="sitemap">
                <a href="/events" style={{textDecoration: 'none', color:'white'}}><p>Events</p></a>
                <a href="/membership" style={{textDecoration: 'none', color:'white'}}><p>Membership</p></a>
                <a href="/officers" style={{textDecoration: 'none', color:'white'}}><p>Officers</p></a>
                <a href="/calendar" style={{textDecoration: 'none', color:'white'}}><p>Calendar</p></a>
                <a href="/store" style={{textDecoration: 'none', color:'white'}}><p>Store</p></a>
                <a href="/contact" style={{textDecoration: 'none', color:'white'}}><p>Contact</p></a>
              </div>
              <p>&nbsp;</p>
              <p>This website was programmed by Vivek Kogilathota as part of the 2020-2021 Reedy DECA Technology Committee.</p>
              <p>&nbsp;</p>
              <p>This website was made with ReactJS.</p>
            </div>
            <div className="socials">
              <div>
                <p>Reedy High School</p>
                <p>3003 Stonebrook Pkwy</p>
                <p>Frisco, TX, 75034</p>
              </div>
              <p>&nbsp;</p>
              <div>
                <a href="https://www.instagram.com/reedydeca/" target="_blank" style={{textDecoration: 'none', color:'white'}}><FaInstagram className="social"/></a>
                <a href="https://twitter.com/ReedyDeca" target="_blank" style={{textDecoration: 'none', color:'white'}}><FaTwitter className="social"/></a>
              </div>
              
            </div>
          </div>
        </footer>
    </BrowserRouter>
  );
}

export default App;
