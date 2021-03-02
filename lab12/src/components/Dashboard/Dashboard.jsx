import './Dashboard.css';

import React from 'react';

import Table from "../Table/Table";

class Dashboard extends React.Component {
    render() {
        return <div className="dashboard-container">
            <Table name="Good things" cards={[{text: "sflkndsv"}, {text: "sflkndsv"}]}/>
            <Table name="Bad things" cards={[{text: "sflkndsv"}, {text: "sflkndsv"}]}/>
            <Table name="Action items" cards={[{text: "sflkndsv"}, {text: "sflkndsv"}]}/>
        </div>;
    }
}

export default Dashboard;
