import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
import Officers from './containers/Officers/Officers';
import Contacts from './containers/Contacts/Contacts';
import Calendar from './containers/Calendar/Calendar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <ToolBar />
        </header>
        <Route path="/" component={Home} exact/>
        <Route path="/events" component={Events} exact/>
        <Route path="/competitive events" component={Events} exact/>
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
        <Route path="/officers" component={Officers} />
        <Route path="/contact" component={Contacts} />
        <Route path="/calendar" component={Calendar} />

        <footer style={{marginTop:'20px'}}>
          <div class="footer"/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
