import './Dashboard.css';

import React from 'react';

import Table from "../Table/Table";

class Dashboard extends React.Component {
    render() {
        return <div className="dashboard-container">
            <Table name="Good things" background="transparent"/>
            <Table name="Bad things" background="transparent"/>
            <Table name="Action items" background="transparent"/>
        </div>;
    }
}

export default Dashboard;
