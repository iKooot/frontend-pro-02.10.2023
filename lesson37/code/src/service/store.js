import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../ducks/todo.duck';
import usersReducer from '../ducks/users.duck';

const store = configureStore({
    reducer: {
        todo: todosReducer,
        users: usersReducer
    },
    devTools: true
})

export default store;