import './Table.css';

import React from 'react';

import Card from "../Card/Card";
import {CardModel} from "../Card/CardModel";
import InputField from "../InputField/InputField";

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            inputText: '',
            commentsAmount: 0,
            isAddFormOpen: false
        }

        this.openAddForm = this.openAddForm.bind(this);
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

    addCardItem(text) {
        this.setState((state) => ({
            cards: [...state.cards, new CardModel(text)],
            commentsAmount: state.commentsAmount + 1,
            isAddFormOpen: false
        }));

        this.sortCards();
    }
    
    openAddForm() {
        this.setState(() => ({
            isAddFormOpen: true
        }))
    }

    render() {
        const {openAddForm, addCardItem} = this;
        const {cards, commentsAmount, isAddFormOpen} = this.state;
        const {background, name} = this.props;

        return <div className="container" style={{background: background}}>

            <div className="header">
                <h1>{name}</h1>
                <p>{commentsAmount}</p>
            </div>

            <div className="button-container">
                {isAddFormOpen
                    ? <InputField buttonFunction={addCardItem} buttonText="Create" textValue=""/>
                    : <button className="add-button" onClick={openAddForm}>Add</button>}
            </div>

            <div className="cards-container">
                {cards.map(item => <Card key={item.id} item={item} sort={this.sortCards}/>)}
            </div>

        </div>;
    }
}

export default Table;
