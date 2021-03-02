import './Card.css';

import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            likes: this.props.item.likes,
            dislikes: this.props.item.dislikes
        }
    }

    render() {

        return <div className="card-container">
            <div className="col text-col">
                <p className="text">{this.props.item.text}</p>
                <p className="date">{this.props.item.date}</p>
            </div>

            <div className="col icon-col">
                <div className="col like-col">
                    <img src="./icons/like.svg" alt="icon"/>
                    <p>{this.state.likes}</p>
                </div>

                <div className="col dislike-col">
                    <img src="./icons/dislike.svg" alt="icon"/>
                    <p>{this.state.dislikes}</p>
                </div>

            </div>

        </div>;
    }
}

export default Card;
