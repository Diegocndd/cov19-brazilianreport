import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class DataBox extends Component{

    renderBrazil = (item) => {
        return(
        <div> 
        <div id="tbl-header"> 
            <table cellpadding="4">
                <tr className="first-row">
                    <td id="fst-column">Estado</td>
                    <td className="other-column">Mortes</td>
                    <td className="other-column">Casos</td>
                    <td className="other-column">Suspeitos</td>
                </tr>
            </table> 
            </div> 
            <div id="tbl-content"> 
                <table cellpadding="4">
                    <div id="scroll-data"> 
                        {
                        item.map( item =>  <tr key={item.id}>
                                                <td id="fst-column"><Link to={{pathname:`/estado/${item.uf}`, data: item.uf}}>{item.state}</Link></td>
                                                <td id="death-column" className="other-column">{item.deaths}</td>
                                                <td id="cases-column" className="other-column">{item.cases}</td>
                                                <td id="suspect-column" className="other-column">{item.suspects}</td>
                                            </tr> )}
                    </div>
                </table>
            </div> 
        </div>
        )
    }

    renderWorld = (item) => {
        return(
            <div> 
                <div id="tbl-header"> 
                    <table cellpadding="4">
                        <tr className="first-row">
                            <td id="fst-column">País</td>
                            <td className="other-column">Mortes</td>
                            <td className="other-column">Casos</td>
                            <td className="other-column">Recuperados</td>
                        </tr>
                    </table> 
                </div> 
                <div id="tbl-content"> 
                    <table cellpadding="4">
                        <div id="scroll-data"> 
                            {item.map( item =>  <tr key={item.id}>
                                                    <td id="fst-column">{item.country}</td>
                                                    <td id="death-column" className="other-column">{item.deaths}</td>
                                                    <td id="cases-column" className="other-column">{item.cases}</td>
                                                    <td id="recovered-column" className="other-column">{item.recovered}</td>
                                                </tr> )}
                        </div>
                    </table>
                </div> 
            </div>
            )
    }

    renderCountry = (item) => {
        return(
            <div> 
                <div id="tbl-header"> 
                    <table cellpadding="3">
                        <tr className="first-row">
                            <td id="fst-column">Mortes</td>
                            <td className="other-column">Casos</td>
                            <td className="other-column">Recuperados</td>
                        </tr>
                    </table> 
                </div> 
                <div id="tbl-content"> 
                    <table cellpadding="4">
                        <div id="scroll-data"> 
                            {item.map( item =>  <tr key={item.id}>
                                                    <td id="death-column" className="other-column">{item.deaths}</td>
                                                    <td id="cases-column" className="other-column">{item.cases}</td>
                                                    <td id="recovered-column" className="other-column">{item.recovered}</td>
                                                </tr> )}
                        </div>
                    </table>
                </div> 
            </div>
            )
    }

    render(){
        const title = this.props.title;
        const item = this.props.data;
        const type = this.props.type;
        return(
            <div id="data-box">
                <h2 id="title">{title}</h2>
                {type === "brazil" && this.renderBrazil(item)}
                {type === "world" && this.renderWorld(item)}
                {type === "country" && this.renderCountry(item)}
            </div>
        )
    }
}
