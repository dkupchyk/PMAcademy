import React from 'react';

import './TodoItem.css';
import withTodoItem from "./withTodoItem";

function TodoItem(props) {

    return (<div className={`todo-item ${props.idHighlighted ? 'highlighted' : ''}`}>
            <p className="todo-item__id">{props.index}</p>
            <p className={`todo-item__text ${props.completed ? 'complete' : 'not-complete'}`}>{props.text}</p>
            <div className="todo-item__button" onClick={props.changeComplete}>X</div>
        </div>
    );
}

export default withTodoItem(TodoItem);
