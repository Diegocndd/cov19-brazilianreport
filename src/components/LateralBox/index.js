import React, { Component } from 'react';
import './style.css';

export default class WebSite extends Component{
  render(){
    return(
      <div id="lateral-box">
        <div id="content-lateral-box"> 
          <p className="title" id="global-title">GLOBAL</p>
          <p className="general-title">CASOS</p>
          <p className="subitem" id="cases">6.745.294</p>
          <p className="general-title">MORTOS</p>
          <p className="subitem" id="deaths">1.005.789</p>
          <p className="general-title">RECUPERADOS</p>
          <p className="subitem" id="recovered">4.555.611</p>
        </div>
      </div>
    )
  }
}
