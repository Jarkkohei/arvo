import React, { Component } from 'react';

import './App.css';

import { Grid } from 'react-bootstrap';

import Amount from './components/Amount';
import Adding from './components/Adding';
import Consuming from './components/Consuming';
import Saving from './components/Saving';

class App extends Component {

    
    state = {
        amount: 0,
        sisHinta: 0,
        seutuHinta: 0,
        limit: 0
    };

    componentWillMount = () => {
        console.log('App.componentWillMount');
        let newState = JSON.parse(localStorage.getItem('data'));

        if(newState) {
            this.setState({...newState});
        }
    };

    getSeutuMatkat = () => {
        return Math.floor(this.state.amount / this.state.seutuHinta);
    };

    getSisMatkat = () => {
        return Math.floor(this.state.amount / this.state.sisHinta);
    };

    plusAmount = (plus) => {
        let newAmount = this.state.amount + plus;
        newAmount = parseFloat(newAmount.toFixed(2));
        return this.setState({ amount: newAmount });
    };

    minusAmount = (type) => {

        let newAmount = 0;

        switch(type) {
            case 'sisHinta':
                newAmount = this.state.amount - this.state.sisHinta;
                break;
            case 'seutuHinta':
                newAmount = this.state.amount - this.state.seutuHinta;
                break;
            default:
                newAmount = this.state.amount - this.state.sisHinta;
                break;
        }
        newAmount = parseFloat(newAmount.toFixed(2));
        return this.setState({ amount: newAmount });
    };

    store = () => {
        console.log('App.saveAmount');
        localStorage.setItem('data', JSON.stringify(this.state));
    };


    render() {
        return (
            <div className="App">
                <Grid>
                    <Amount  
                        amount={ this.state.amount }
                        underLimit={ this.state.amount < this.state.limit }/>

                    <Adding 
                        handleAddition={ (amount) => this.plusAmount(amount) } />

                    <Consuming  
                        handleConsuming={ (type) => this.minusAmount(type)} 
                        sisMatkat={ this.getSisMatkat() } 
                        seutuMatkat={ this.getSeutuMatkat() } />

                    <Saving store={ this.store }/>
                </Grid>
            </div>
        );
    }
}

export default App;
