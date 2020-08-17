import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//import {Menubar} from 'primereact/menubar';
import Menu from './components/Menu';
//import {withRouter} from 'react-router-dom';

import './App.css';

export default class WebSite extends Component{
  render(){
    return(
      <div className="App">
        <Menu/>
        <div id="main">
          <div className="content" id="content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
