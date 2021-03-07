import React from 'react';

import './Card.css';

import InputField from "../../../common/InputField/InputField";

class Card extends React.Component {

    constructor(props) {
        super(props);

        this.card = this.props.item;
        this.state = {
            likes: this.props.item.likes,
            dislikes: this.props.item.dislikes,
            isEditFormOpen: false,
            isLiked: false,
            isDisliked: false
        }

        this.addLike = this.addLike.bind(this);
        this.addDislikes = this.addDislikes.bind(this);
        this.setLikes = this.setLikes.bind(this);
        this.changeLikes = this.changeLikes.bind(this);
        this.openEditForm = this.openEditForm.bind(this);
        this.editCardItem = this.editCardItem.bind(this);
    }

    addLike = () => this.changeLikes(true, this.state.isLiked, this.state.isDisliked);

    addDislikes = () => this.changeLikes(false, this.state.isDisliked, this.state.isLiked);

    changeLikes(isLike, isAlreadySelected, isOppositeSelected) {
        if (isAlreadySelected) return;

        isOppositeSelected
            ? this.setLikes(this.card.updateLikes('likes', isLike ? 1 : -1), this.card.updateLikes('dislikes', isLike ? -1 : 1), isLike, !isLike)
            : this.setLikes(this.card.updateLikes('likes', isLike ? 1 : 0), this.card.updateLikes('dislikes', isLike ? 0 : 1), isLike, !isLike);
    }

    openEditForm() {
        this.setState(_ => ({
            isEditFormOpened: true
        }));
    }

    editCardItem(text) {
        this.card.text = text;

        this.setState(_ => ({
            isEditFormOpened: false
        }));
    }

    setLikes(newLikes, newDislikes, newIsLiked, newIsDisliked) {
        this.setState(_ => ({
            likes: newLikes,
            dislikes: newDislikes,
            isLiked: newIsLiked,
            isDisliked: newIsDisliked
        }));
        this.props.sort();
    }

    render() {
        const {addLike, addDislikes, editCardItem, openEditForm} = this;

        const {text, date} = this.card;
        const {likes, dislikes, isLiked, isDisliked, isEditFormOpened} = this.state;

        return <div className="card-container">

            {isEditFormOpened
                ? <InputField buttonFunction={editCardItem} buttonText="Edit" textValue={text}/>
                : <div className="card">
                    <div className="info-container">
                        <div className="col text-col">
                            <p className="text">{text}</p>
                            <p className="date">{date}</p>
                        </div>

                        <div className="col icon-col">
                            <div className="col like-col">
                                <img className={isLiked ? "yellow-icon" : ""} onClick={addLike} src="./icons/like.svg"
                                     alt="icon"/>
                                <p>{likes}</p>
                            </div>

                            <div className="col dislike-col">
                                <img className={isDisliked ? "yellow-icon" : "icon"} onClick={addDislikes}
                                     src="./icons/dislike.svg"
                                     alt="icon"/>
                                <p>{dislikes}</p>
                            </div>
                        </div>
                    </div>
                    <p className="edit-button" onClick={openEditForm}>Edit</p>
                </div>
            }

        </div>;
    }
}

export default Card;
