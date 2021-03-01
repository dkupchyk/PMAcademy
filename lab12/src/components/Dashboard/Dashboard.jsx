import './Dashboard.css';

import React from 'react';

import Table from "../Table/Table";

class Dashboard extends React.Component {
    render() {
        return <div className="dashboard-container">
            <Table name="1dsmvknlkd"/>
            <Table name="1dsmvknlkd"/>
            <Table name="1dsmvknlkd"/>
        </div>;
    }
}

export default Dashboard;
