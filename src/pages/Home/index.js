import React, { Component } from 'react';
import './style.css';
import DataBox from '../../components/DataBox';
import LateralBox from '../../components/LateralBox';

export default class DashBoard extends Component{

    state = {
        dataBrazil: [],
        dataWorld: [],
    }

    getBrazilData(){
        const url = `https://covid19-brazil-api.now.sh/api/report/v1`;
  
        fetch(url)
          .then(res => res.json())
          .then(res => 
            this.setState({
              dataBrazil : res.data
            }))
    }

    getWorldData(){
        const url = `https://covid19-brazil-api.now.sh/api/report/v1/countries`;
  
        fetch(url)
          .then(res => res.json())
          .then(res => 
            this.setState({
              dataWorld : res.data
            }))
    }

    getCountryData(country){
      const url = `https://covid19-brazil-api.now.sh/api/report/v1/${country}`;

      fetch(url)
        .then(res => res.json())
        .then(res => 
          this.setState({
            dataCountry : res.data
          }))
    }

    render(){
        var country = "brazil";
        this.getBrazilData();
        this.getWorldData();
        this.getCountryData(country);
        return(
            <div id="dashboard">
              <div id="left-container"> 
                <DataBox 
                    title={"Dados Sobre o Brasil"}
                    data={this.state.dataBrazil}
                    type={"brazil"}
                />
                <section id="world-box"> 
                  <DataBox 
                      title={"Dados Mundiais"}
                      data={this.state.dataWorld}
                      type={"world"}
                  />
                </section>
              </div>
              <div id="right-container"> 
                <LateralBox/>
                <LateralBox/>
              </div>
            </div>
        )
    }

}
