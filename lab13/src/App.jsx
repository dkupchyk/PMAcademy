import './App.css';

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Weather from "./components/Weather/Weather";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Retrospective/Dashboard/Dashboard";
import Todo from "./components/Todo/Todo";


function App() {
    return (
        <Router>
            <div className="App">
                <Navigation className="nav"/>

                <Switch>
                    <Route path="/" exact component={Weather}/>
                    <Route path="/weather/" component={Weather}/>
                    <Route path="/retro/" component={Dashboard}/>
                    <Route path="/todos/" component={Todo}/>
                </Switch>
            </div>
        </Router>);
}

export default App;
