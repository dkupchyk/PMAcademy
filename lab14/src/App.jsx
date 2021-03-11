import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import MainPage from "./components/MainPage/MainPage";
import Album from "./components/Album/Album";
import PhotoDetailed from "./components/PhotoDetailed/PhotoDetailed";
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
                        <Route path="/album:id" component={Album}/>
                        <Route path="/photoId=:id" component={PhotoDetailed}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
