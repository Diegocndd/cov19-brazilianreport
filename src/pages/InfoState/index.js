import React, {Component} from 'react';
import './style.css';
import HeaderState from '../../components/HeaderState';

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

    milhar(n){
        var n = ''+n, t = n.length -1, novo = '';
    
        for( var i = t, a = 1; i >=0; i--, a++ ){
            var ponto = a % 3 == 0 && i > 0 ? '.' : '';
            novo = ponto + n.charAt(i) + novo;
        }
        return novo;
    }

    render(){
        
        this.getInfoUF(this.state.uf);
        const item = this.state.dataUf;
        const link = window.location.href;

        return(
            <div className="title">
                <HeaderState uf={`${link.substr(-2)}`}/>
                <p id="title-state">{item.state}</p>
                <p id="cases-state">{this.milhar(item.cases)} casos</p>
                <p id="deaths-state">{this.milhar(item.deaths)} mortes</p>
                <p id="suspects-state">{this.milhar(item.suspects)} suspeitos</p>

            </div>
        )
    }
}

