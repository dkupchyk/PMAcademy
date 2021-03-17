import React from "react";
import Stepper from "./components/Stepper/Stepper";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import NamePhoneForm from "./components/Form/NamePhoneForm";

function App() {
    return (<Router>
            <div className="App">

                <Stepper amount={5}/>

                <Switch>
                    <Route path="/" exact component={NamePhoneForm}/>
                    <Route path="/step-1" component={Stepper}/>
                    <Route path="/photoId=:id" component={Stepper}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
