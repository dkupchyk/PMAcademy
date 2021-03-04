import './App.css';

import React from 'react';
import Weather from "./components/Weather/Weather";
import Dashboard from "./components/Retrospective/Dashboard/Dashboard";

function App() {
    return (<div className="App">
        {/*<Weather/>*/}
        <Dashboard />
    </div>);
}

export default App;
