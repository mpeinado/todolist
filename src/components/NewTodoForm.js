import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { addTodoAction } from '../actions/TodoActions';


const NewTodoForm = () => {
    const { dispatch } = useContext(TodoContext);
    const [todo, setTodo] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addTodoAction(todo));

        setTodo('');
    }
    
    return (
        <form onSubmit={handelSubmit}>
            <input type="text" placeholder="todo" value={todo}
                onChange={(e) => setTodo(e.target.value)} required />

            <input type="submit" value="add todo" />
        </form>
    );
}

export default NewTodoForm;