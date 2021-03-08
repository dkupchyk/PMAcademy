import React from 'react';

import './Todo.css';

import InputField from "../../common/InputField/InputField";
import Dropdown from "../../common/Dropdown/Dropdown";
import {fetchAllUsers, fetchUsersToDos} from "../../sercives/todoApiCalls";
import TodoItem from "./TodoItem/TodoItem";

class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            selectedUserId: null,
            usersTodos: []
        }

        this.changeUser = this.changeUser.bind(this);
    }

    async componentDidMount() {
        await fetchAllUsers().then(result => {
            const users = result.map(user => ({id: user.id, name: user.name}));
            this.setState({users: users})
        });

        await this.changeUser(this.state.users[0]);
    }

    async changeUser(user) {
        await fetchUsersToDos(user.id).then(result => this.setState({usersTodos: result, selectedUserId: user.id}));
    }

    addTodoItem(text) {

    }

    render() {
        const {addTodoItem, changeUser} = this;
        const {users, usersTodos} = this.state;

        return <div className="component-wrapper todo-container">
            <div className="todo-inputs">
                <Dropdown items={users} itemWasChanged={changeUser}/>
                <InputField buttonFunction={addTodoItem} buttonText="Add" textValue="" placeholder="Type new to do..."/>
                <InputField buttonFunction={addTodoItem} buttonText="Add" textValue=""
                            placeholder="Search text in to do"/>
            </div>

            <div className="todo-list">
                {usersTodos.map(item => <TodoItem key={item.id} text={item.title}/>)}
            </div>
        </div>;
    }
}

export default Todo;
