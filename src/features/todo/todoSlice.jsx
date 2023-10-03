import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    // loading: false,
    todos: [
      { id: 1, title: "todo 1", completed: false },
      { id: 2, title: "todo 2", completed: false },
    ],
    // error: "",
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
      console.log(state.todos);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((item) => item.id == action.payload.id);
      todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
