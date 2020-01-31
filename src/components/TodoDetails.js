import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { deleteTodoAction } from '../actions/TodoActions';

const TodoDetails = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    return (
        <li onClick={() => dispatch(deleteTodoAction(todo.id))}>
            <div className="title">{todo.todo}</div>
        </li>
    );
}

export default TodoDetails;