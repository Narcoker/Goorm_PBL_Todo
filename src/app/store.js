import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./TodoList/todoListSlice";
import pageModeSlice from "./PageMode/pageModeSlice";

export const store = configureStore({
  reducer: {
    todoList: todoListSlice,
    pageMode: pageModeSlice,
  },
});
