import React, { createContext, useReducer, useEffect } from 'react';
import { todoReducer } from '../reducers/todoReducer';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    /**
     * will set 'todos' by getting the data from localStorage
     */
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const localData = localStorage.getItem('todos');

        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        // updates the state (after todos change) using data from reducer
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;