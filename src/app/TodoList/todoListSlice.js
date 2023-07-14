import { createSlice } from "@reduxjs/toolkit";
import { WORK_STATE } from "../constants";
import { v4 as uuidv4 } from "uuid";
export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todoList: [],
    selectedDetails: [],
  },
  reducers: {
    addTodo: (state, { payload: text }) => {
      console.log("addTodo");
      //   console.log("inputTodo: ", text);
      state.todoList.unshift({
        uuid: uuidv4(),
        title: text,
        startDate: "-",
        endDate: "-",
        state: WORK_STATE.BEFORE_START,
        editeMode: false,
        details: [],
      });
    },
    editTodo: (state) => {
      console.log("editTodo");
    },
    changeTodoState: (state, { payload: uuid }) => {
      console.log("changeTodoState");
      const targetIndex = state.todoList.findIndex(
        (todo) => todo.uuid === uuid
      );
      switch (state.todoList[targetIndex].state) {
        case WORK_STATE.BEFORE_START:
          state.todoList[targetIndex].state = WORK_STATE.IN_PROGRESS;
          break;
        case WORK_STATE.IN_PROGRESS:
          state.todoList[targetIndex].state = WORK_STATE.END;
          break;
        case WORK_STATE.END:
          state.todoList[targetIndex].state = WORK_STATE.BEFORE_START;
          break;
        default:
          break;
      }
    },
    removeTodo: (state, { payload: uuid }) => {
      console.log("removeTodo");

      const targetIndex = state.todoList.findIndex(
        (todo) => todo.uuid === uuid
      );
      targetIndex !== -1 && state.todoList.splice(targetIndex, 1);
    },

    setSelectedDetails: (state, { payload: uuid }) => {
      console.log("setSelectedDetails");

      const targetIndex = state.todoList.findIndex(
        (todo) => todo.uuid === uuid
      );
      console.log(targetIndex);
      state.selectedDetails = [];
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
  changeTodoState,
  removeTodo,
  setSelectedDetails,
  addDetailTodo,
  editedDetailTodo,
  removeDetailTodo,
} = todoListSlice.actions;
export default todoListSlice.reducer;
