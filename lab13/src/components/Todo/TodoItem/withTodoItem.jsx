import React from 'react';

import {patchToDo} from "../../../sercives/todoApiCalls";

function withTodoItem(TodoItem) {

    return class extends React.Component {
        constructor(props) {
            super(props);

            this.changeComplete = this.changeComplete.bind(this);
        }

        async changeComplete() {
            const data = await patchToDo(this.props.id, !this.props.completed);

            await this.props.changeComplete(this.props.id, data.completed);
        }

        render() {
            return <TodoItem  {...this.props} changeComplete={this.changeComplete}/>;
        }
    }
}

export default withTodoItem;
