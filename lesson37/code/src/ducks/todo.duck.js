import { createSlice } from "@reduxjs/toolkit";

/****************************************
 * DUCK
 ****************************************/

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload.id);
    },
  },
  selectors: {
    selectTodos: (state) => state.todos,
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export const { selectTodos } = todosSlice.selectors;
export default todosSlice.reducer
