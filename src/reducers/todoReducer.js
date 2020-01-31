import { ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';
import uuid from 'uuid/v1';

export const todoReducer = (state, action ) => {
    debugger;
    switch(action.type){
        case ADD_TODO:
            return [...state, {
                id: uuid(),
                todo: action.todo.todo
            }]
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}