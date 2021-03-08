import React, {useState} from 'react';

import './TodoItem.css';

function TodoItem(props) {

    // const [query, setQuery] = useState('');

    return (<div className="todo-item">
            <p className="todo-item__text">{props.text}</p>
            <div className="todo-item__button">X</div>
    </div>
    );
}

export default TodoItem;
