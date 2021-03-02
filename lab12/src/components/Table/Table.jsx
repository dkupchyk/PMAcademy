import './Table.css';

import React from 'react';

import Card from "../Card/Card";
import {CardModel} from "../Card/CardModel";

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
        this.addCardIfValid = this.addCardIfValid.bind(this);
        this.addCardItem = this.addCardItem.bind(this);
        this.sortCards = this.sortCards.bind(this);
    }

    sortCards() {
        this.setState((state) => ({
            cards: state.cards.sort(function (a, b) {
                return (b.likes - b.dislikes) - (a.likes - a.dislikes);
            })
        }))
    }

    addCardIfValid() {
        if (!this.state.inputText) {
            return this.setState(() => ({
                isInvalidInput: true
            }));
        }

        this.addCardItem();
        this.sortCards();
    }

    addCardItem() {
        this.setState((state) => ({
            cards: [...state.cards, new CardModel(state.inputText)],
            inputText: '',
            isInvalidInput: false,
            commentsAmount: state.commentsAmount + 1,
            isAddFormOpen: false
        }));
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
        const {openAddForm, changeText, addCardIfValid} = this;
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
                            <button onClick={addCardIfValid}>Create</button>
                        </div>
                        <p className="error">{isInvalidInput ? INVALID_INPUT : ''}</p>
                    </div>
                    : <button onClick={openAddForm}>Add</button>}
            </div>

            <div className="cards-container">
                {cards.map(item => <Card key={item.id} item={item} sort={this.sortCards}/>)}
            </div>

        </div>;
    }
}

export default Table;
