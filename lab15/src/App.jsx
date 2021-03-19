import React from "react";
import Stepper from "./components/Stepper/Stepper";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.css';

import NamePhoneForm from "./components/Form/NamePhone/NamePhoneForm";
import Education from "./components/Form/Education/Education";
import Work from "./components/Form/Work/Work";
import CV from "./components/CV/CV";

function App() {
    return (<Router>
            <div className="App">

                <Stepper amount={3}/>

                <Switch>
                    <Route exact path="/" render={() => {
                        return (<Redirect to="/step-1"/>)
                    }}/>
                    <Route path="/step-1" component={NamePhoneForm}/>
                    <Route path="/step-2" component={Education}/>
                    <Route path="/step-3" component={Work}/>
                    <Route path="/cv" component={CV}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
