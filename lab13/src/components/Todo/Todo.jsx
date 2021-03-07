import React from 'react';

import './Todo.css';
import InputField from "../../common/InputField/InputField";
import Dropdown from "../../common/Dropdown/Dropdown";

class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [{id: 1, name: "kdjvndks 1"}, {id: 2, name: "kdjvndks 2"}, {id: 3, name: "kdjvndks 3"}]
        }
    }

    addTodoItem(text) {

    }

    render() {
        const {addTodoItem} = this;

        return <div className="component-wrapper todo-container">

            <div className="todo-inputs">
                <Dropdown items={this.state.items} />
                <InputField buttonFunction={addTodoItem} buttonText="Add" textValue="" placeholder="Type new to do..."/>
                <InputField buttonFunction={addTodoItem} buttonText="Add" textValue="" placeholder="Search text in to do"/>
            </div>

        </div>;
    }
}

export default Todo;
