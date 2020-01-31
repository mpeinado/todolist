import { ADD_TODO, REMOVE_TODO } from './actionTypes';

export const addTodoAction = (todo) => {
    return {
        type: ADD_TODO,
        todo:{
            todo: todo
        }
    }
}

export const deleteTodoAction = (id) => {
    return {
        type: REMOVE_TODO,
        id: id
    }
}