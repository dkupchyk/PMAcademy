import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import MainPage from "./components/MainPage/MainPage";
import Album from "./components/Album/Album";
import Image from "./components/Image/Image";
import Header from "./shared/Header/Header";

function App() {
    return (<Router>
            <div className="App">

                {/*<div className="header-container">*/}
                {/*    <Header title="Album"/>*/}
                {/*</div>*/}

                <div className="router-container">
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/album/" component={Album}/>
                        <Route path="/image/" component={Image}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
