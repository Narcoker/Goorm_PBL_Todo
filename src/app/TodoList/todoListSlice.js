import { createSlice } from "@reduxjs/toolkit";
import { WORK_STATE } from "../constants";
import { v4 as uuidv4 } from "uuid";
export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, { payload: text }) => {
      //   console.log("addTodo");
      //   console.log("inputTodo: ", text);
      state.unshift({
        uuid: uuidv4(),
        title: text,
        startDate: "-",
        endDate: "-",
        state: WORK_STATE.BEFORE_START,
        EditeMode: false,
        Detail: [],
      });
    },
    editTodo: (state) => {
      console.log("editTodo");
    },
    removeTodo: (state, { payload: uuid }) => {
      console.log("removeTodo");
      const index = state.findIndex((todo) => todo.uuid === uuid);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    addDetailTodo: (state) => {
      console.log("addDetailTodo");
    },
    editedDetailTodo: (state) => {
      console.log("editedDetailTodo");
    },
    removeDetailTodo: (state) => {
      console.log("removeDetailTodo");
    },
  },
});

export const {
  addTodo,
  editTodo,
  removeTodo,
  addDetailTodo,
  editedDetailTodo,
  removeDetailTodo,
} = todoListSlice.actions;
export default todoListSlice.reducer;
