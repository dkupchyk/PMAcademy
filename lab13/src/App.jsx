import './App.css';

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Weather from "./components/Weather/Weather";
import Dashboard from "./components/Retrospective/Dashboard/Dashboard";
import Navigation from "./components/Navigation/Navigation";


function App() {
    return (
        <Router>
            <div className="App">
                <Navigation/>

               <Switch>
                   <Route path="/" exact component={Weather} />
                   <Route path="/weather/" component={Weather} />
                   <Route path="/retro/" component={Dashboard} />
               </Switch>
            </div>
        </Router>);
}

export default App;
