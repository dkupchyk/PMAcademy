import React from "react";
import Stepper from "./components/Stepper/Stepper";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.css';

import NamePhoneForm from "./components/Form/NamePhoneForm";
import WorkForm from "./components/Form/WorkForm";
import CV from "./components/CV/CV";
import Education from "./components/Form/Education/Education";

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
                    <Route path="/step-3" component={WorkForm}/>
                    <Route path="/step-4" component={CV}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
