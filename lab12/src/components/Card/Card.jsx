import './Card.css';

import React from 'react';
import {CardModel} from "./CardModel";

class Card extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            likes: this.props.item.likes,
            dislikes: this.props.item.dislikes,
            isLiked: false,
            isDisliked: false
        }

        this.addLike = this.addLike.bind(this);
        this.addDislikes = this.addDislikes.bind(this);
        this.changeLikes = this.changeLikes.bind(this);
    }

    addLike() {
        if (this.state.isLiked) return;

        this.state.isDisliked
            ? this.changeLikes(this.state.likes + 1, this.state.dislikes - 1, true, false)
            : this.changeLikes(this.state.likes + 1, this.state.dislikes, true, false);
    }

    addDislikes() {
        if (this.state.isDisliked) return;

        this.state.isLiked
            ? this.changeLikes(this.state.likes - 1, this.state.dislikes + 1, false, true)
            : this.changeLikes(this.state.likes, this.state.dislikes + 1, false, true);
    }

    changeLikes(newLikes, newDislikes, newIsLiked, newIsDisliked) {
        this.setState((state) => ({
            likes: newLikes,
            dislikes: newDislikes,
            isLiked: newIsLiked,
            isDisliked: newIsDisliked
        }))
    }

    render() {
        const {addLike, addDislikes} = this;

        const {text, date} = this.props.item;
        const {likes, dislikes, isLiked, isDisliked} = this.state;

        return <div className="card-container">
            <div className="col text-col">
                <p className="text">{text}</p>
                <p className="date">{date}</p>
            </div>

            <div className="col icon-col">
                <div className="col like-col">
                    <img className={isLiked ? "yellow-icon" : ""} onClick={addLike} src="./icons/like.svg" alt="icon"/>
                    <p>{likes}</p>
                </div>

                <div className="col dislike-col">
                    <img className={isDisliked ? "yellow-icon" : "icon"} onClick={addDislikes} src="./icons/dislike.svg" alt="icon"/>
                    <p>{dislikes}</p>
                </div>

            </div>

        </div>;
    }
}

export default Card;
