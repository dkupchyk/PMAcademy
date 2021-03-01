import './Dashboard.css';

import React from 'react';

import Table from "../Table/Table";

class Dashboard extends React.Component {
    render() {
        return <div className="dashboard-container">
            <Table name="Good things"/>
            <Table name="Bad things"/>
            <Table name="Action items"/>
        </div>;
    }
}

export default Dashboard;
