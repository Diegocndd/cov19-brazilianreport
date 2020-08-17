import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Menubar} from 'primereact/menubar';
import {withRouter} from 'react-router-dom';

import './style.css';

export default class WebSite extends Component{
  render(){
    const menuitems = [
      {
         label:'Home',
         icon:'pi pi-fw pi-home',
         command: () => this.props.history.push('/')
      },
      {
         label:'Sobre',
         icon:'pi pi-fw pi-user',
         command: () => this.props.history.push('/sobre')
      },
      {
         label:'Contato',
         icon:'pi pi-fw pi-comment',
         command: () => this.props.history.push('/contato')
      }
   ];

    return(
      <div>
        <Menubar model={menuitems}/>
      </div>
    )
  }
}
