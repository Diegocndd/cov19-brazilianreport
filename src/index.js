import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import InfoState from './pages/InfoState';

ReactDOM.render(
  (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/sobre" component={Sobre}/>
          <Route exact path="/contato" component={Contato}/>
          <Route path="/estado" component={InfoState}/>
        </Switch>
      </App>
    </Router> 
  ),
  document.getElementById('root')
);
