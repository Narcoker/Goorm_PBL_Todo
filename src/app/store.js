import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./TodoList/todoListSlice";

export const store = configureStore({
  reducer: {
    todoList: todoListSlice,
  },
});
