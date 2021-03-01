import './Table.css';

import React from 'react';
import Card from "../Card/Card";

class Table extends React.Component {
    render() {
        return <div className="table-container">
            <h1>{this.props.name}</h1>
            <button>Add</button>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>;
    }
}

export default Table;
