import React, {useState} from 'react';

const INVALID_INPUT = 'Enter a valid input.';

function SearchTodo(props) {

    const [inputValue, setInputValue] = useState(null);

    const execute = () => props.buttonFunction(inputValue);

    return (<div>
            <div className="input-container">
                <input type="text"
                       onChange={e => setInputValue(e.target.value)}
                       placeholder="Search text in todos.."/>
                <button onClick={execute}>Search</button>
            </div>
            <p className="error">{inputValue || inputValue !== '' ? '' : INVALID_INPUT}</p>
        </div>
    );
}

export default SearchTodo;
