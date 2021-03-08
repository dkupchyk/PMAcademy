import React from 'react';

import './Todo.css';
import InputField from "../../common/InputField/InputField";
import Dropdown from "../../common/Dropdown/Dropdown";
import {getAllUsers} from "../../sercives/todoApiCalls";

class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        getAllUsers().then(result => this.setState({ users: result }));
    }

    addTodoItem(text) {

    }

    render() {
        const {addTodoItem} = this;
        const {users} = this.state;

        return <div className="component-wrapper todo-container">
            <div className="todo-inputs">
                <Dropdown items={users}/>
                <InputField buttonFunction={addTodoItem} buttonText="Add" textValue="" placeholder="Type new to do..."/>
                <InputField buttonFunction={addTodoItem} buttonText="Add" textValue=""
                            placeholder="Search text in to do"/>
            </div>
        </div>;
    }
}

export default Todo;
