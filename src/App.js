import React, { Component } from 'react';

import './App.css';

import { Grid } from 'react-bootstrap';

import Amount from './components/Amount';
import Adding from './components/Adding';
import Consuming from './components/Consuming';
import Saving from './components/Saving';
import Navigationbar from './components/Navigationbar';

class App extends Component {

    
    state = {
        amount: 0,
        sisHinta: 2.20,
        seutuHinta: 4.20,
        limit: 10,
        upToDate: true
    };

    componentWillMount = () => {
        console.log('App.componentWillMount');

        if (localStorage.getItem("arvo_data") !== null) {
            let newState = JSON.parse(localStorage.getItem('arvo_data'));

            if(newState) {
                this.setState({...newState, upToDate: true });
            }
        }
        
    };

    getSeutuMatkat = () => {
        return Math.floor(this.state.amount / this.state.seutuHinta);
    };

    getSisMatkat = () => {
        return Math.floor(this.state.amount / this.state.sisHinta);
    };

    plusAmount = (plus) => {
        this.setState({ upToDate: false });
        
        let newAmount = this.state.amount + plus;
        newAmount = parseFloat(newAmount.toFixed(2));
        return this.setState({ amount: newAmount });
    };

    minusAmount = (type) => {
        this.setState({ upToDate: false });

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
        this.setState({ upToDate: true });
        localStorage.setItem('arvo_data', JSON.stringify(this.state));
    };


    render() {
        return (
            <div className="App">
                <Grid>
                    <Navigationbar />

                    <Amount  
                        amount={ this.state.amount }
                        underLimit={ this.state.amount < this.state.limit }/>

                    <Adding 
                        handleAddition={ (amount) => this.plusAmount(amount) } />

                    <Consuming  
                        handleConsuming={ (type) => this.minusAmount(type)} 
                        sisMatkat={ this.getSisMatkat() } 
                        seutuMatkat={ this.getSeutuMatkat() } />

                    <Saving store={ this.store } upToDate={this.state.upToDate}/>
                </Grid>
            </div>
        );
    }
}

export default App;
