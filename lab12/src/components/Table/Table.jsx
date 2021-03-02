import './Table.css';

import React from 'react';
import Card from "../Card/Card";
import {CardModel} from "../Card/Card.model";

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            inputText: '',
            isAddFormOpen: false
        }

        this.openAddForm = this.openAddForm.bind(this);
        this.changeText = this.changeText.bind(this);
        this.addCard = this.addCard.bind(this);
    }

    addCard() {
        this.setState((state) => ({
            cards: [...state.cards, new CardModel(state.inputText)],
            inputText: '',
            isAddFormOpen: false
        }))
    }

    changeText(event) {
        this.setState(() => ({
            inputText: event.target.value
        }))
    }

    openAddForm() {
        this.setState(() => ({
            isAddFormOpen: true
        }))
    }

    render() {
        const {openAddForm, changeText, addCard} = this;
        const {cards} = this.state;

        return <div className="table-container">
            <h1>{this.props.name}</h1>

            <div className="button-container">
                {this.state.isAddFormOpen
                    ? <div className="add-card">
                        <input type="text"
                               onChange={changeText}
                               placeholder="Enter text..."/>
                        <button onClick={addCard}>Create</button>
                    </div>
                    : <button onClick={openAddForm}>Add</button>}
            </div>

            {cards.map(item => <Card key={item.id} item={item}/>)}

        </div>;
    }
}

export default Table;
