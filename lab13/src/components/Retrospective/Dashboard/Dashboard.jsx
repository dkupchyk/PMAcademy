import React from 'react';

import './Dashboard.css';

import Table from "../Table/Table";

class Dashboard extends React.Component {
    render() {
        return <div className="component-wrapper dashboard-container">
            <Table name="Good things" background="transparent"/>
            <Table name="Bad things" background="transparent"/>
            <Table name="Action items" background="transparent"/>
        </div>;
    }
}

export default Dashboard;
