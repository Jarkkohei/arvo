import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Navigationbar from './components/Navigationbar';
import Welcome from './containers/Welcome';
import Main from './containers/Main';
import Settings from './containers/Settings';
import About from './containers/About';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navigationbar />
					<Route exact path="/" component={Welcome} />
                    <Route path="/main" component={Main} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/about" component={About} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
