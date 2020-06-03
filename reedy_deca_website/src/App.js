import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Home from './containers/Home/Home';
import Events from './containers/Events/Events';
import ToolBar from './components/Navigation/ToolBar/ToolBar';
import PBA from './components/EventLister/SubEvents/PBA';
import TD from './components/EventLister/SubEvents/TD';
import BOR from './components/EventLister/SubEvents/BOR';

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
        <footer>
          <div class="footer"/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
