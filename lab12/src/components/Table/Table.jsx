import './Table.css';

import React from 'react';
import Card from "../Card/Card";
import {CardModel} from "../Card/Card.model";

const INVALID_INPUT = 'Enter a valid input.';

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            inputText: '',
            commentsAmount: 0,
            isInvalidInput: false,
            isAddFormOpen: false
        }

        this.openAddForm = this.openAddForm.bind(this);
        this.changeText = this.changeText.bind(this);
        this.addCard = this.addCard.bind(this);
    }

    addCard() {
        if (this.state.inputText) {
            this.setState((state) => ({
                cards: [...state.cards, new CardModel(state.inputText)],
                inputText: '',
                isInvalidInput: false,
                commentsAmount: state.commentsAmount + 1,
                isAddFormOpen: false
            }))
        } else {
            this.setState(() => ({
                isInvalidInput: true
            }))
        }
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
        const {cards, commentsAmount, isAddFormOpen, isInvalidInput} = this.state;
        const {background, name} = this.props;

        return <div className="container" style={{background: background}}>

            <div className="header">
                <h1>{name}</h1>
                <p>{commentsAmount}</p>
            </div>

            <div className="button-container">
                {isAddFormOpen
                    ? <div>
                        <div className="add-card">
                            <input type="text"
                                   onChange={changeText}
                                   placeholder="Enter text..."/>
                            <button onClick={addCard}>Create</button>
                        </div>
                        <p className="error">{isInvalidInput ? INVALID_INPUT: ''}</p>
                    </div>
                    : <button onClick={openAddForm}>Add</button>}
            </div>

            {cards.map(item => <Card key={item.id} item={item}/>)}

        </div>;
    }
}

export default Table;
