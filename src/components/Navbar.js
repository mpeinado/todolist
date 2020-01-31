import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const Navbar = () => {
    const { todos } = useContext(TodoContext);

    return(
        <div className="navbar">
            <h1>Marco's Todo List</h1>

            <p>
                Currently I have {todos.length} todos to get through...
            </p>
        </div>
    );
}

export default Navbar;