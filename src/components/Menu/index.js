import React, { Component } from 'react';
import './style.css';

export default class Menu extends Component{
  render(){
    return(
      <nav id="menu">
            <section id="logo">Cov19BR</section>
            <section id="links-list">
                <li>Dados</li>
                <li>Sobre</li>
                <li>Fonte</li>
                <li>Wiki</li>
                <li>Doações</li>
            </section>
      </nav>
    )
  }
}
