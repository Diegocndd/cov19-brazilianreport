import React, {Component} from 'react';
import './style.css';

export default class InfoState extends Component{

    state = {
        uf: '',
        dataUf: {}
    }

    componentDidMount(){
        const link = window.location.href;
        this.setState({ uf : link.substr(-2)});
    }

    getInfoUF(uf){
        const url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`;
  
        fetch(url)
          .then(res => res.json())
          .then(res => 
            this.setState({
              dataUf : res
            }))
    }

    render(){

        this.getInfoUF(this.state.uf);
        const item = this.state.dataUf;
        return(
            <div className="title">
                <p id="title-state">{item.state}</p>
                <p id="cases-state">{item.cases}</p>
            </div>
        )
    }
}

