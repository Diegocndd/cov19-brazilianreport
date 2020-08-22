import React, { Component } from 'react';
import './style.css';

export default class HeaderState extends Component{

    render(){
        const uf = this.props.uf;
        const back = require(`../../img/${uf.toLowerCase()}-back.png`);
        return(
            <div id="header-state" style={{backgroundImage: 'url(' + back + ')'}}>
                <img id="img-state" width="160px" height="160px" src={require(`../../img/${uf.toLowerCase()}-flag.png`)}/>
            </div>
        )
    }
}
