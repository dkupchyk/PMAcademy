import React from 'react';

import './Todo.css';

import InputField from "../../common/InputField/InputField";
import Dropdown from "../../common/Dropdown/Dropdown";
import {fetchAllUsers, fetchUsersToDos, postToDo} from "../../sercives/todoApiCalls";
import TodoItem from "./TodoItem/TodoItem";

class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            selectedUserId: null,
            usersTodos: []
        }

        this.addTodoItem = this.addTodoItem.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.searchText = this.searchText.bind(this);
        this.changeItemStatus = this.changeItemStatus.bind(this);
    }

    async componentDidMount() {
        await fetchAllUsers().then(result => {
            const users = result.map(user => ({id: user.id, name: user.name}));
            this.setState({users: users})
        });

        await this.changeUser(this.state.users[0].id);
    }

    async changeUser(id) {
        await fetchUsersToDos(id).then(result => this.setState({usersTodos: result, selectedUserId: id}));
    }

    async addTodoItem(text) {
        await postToDo(this.state.selectedUserId, text)
            .then(result => {
                this.setState({usersTodos: [...this.state.usersTodos, {id: result.id, title: text, completed: false}]})
            });
    }

    searchText(text) {

    }

    changeItemStatus(id, value) {
        this.setState({
            usersTodos: this.state.usersTodos.map(item => {
                return (item.id !== id)
                    ? item
                    : {...item, completed: value}
            }),
        })
    }

    render() {
        const {addTodoItem, changeUser, searchText, changeItemStatus} = this;
        const {users, usersTodos} = this.state;

        return <div className="component-wrapper todo-container">
            <div className="todo-inputs">
                <Dropdown items={users} itemWasChanged={changeUser}/>
                <InputField buttonFunction={addTodoItem} buttonText="Add" textValue="" placeholder="Type new to do..."/>
                <InputField buttonFunction={searchText} buttonText="Add" textValue=""
                            placeholder="Search text in to do"/>
            </div>

            <div className="todo-list">
                {usersTodos.map((item, index) => <TodoItem key={item.id}
                                                           id={item.id}
                                                           index={index + 1}
                                                           completed={item.completed}
                                                           text={item.title}
                                                           changeComplete={changeItemStatus}/>)}
            </div>
        </div>;
    }
}

export default Todo;
