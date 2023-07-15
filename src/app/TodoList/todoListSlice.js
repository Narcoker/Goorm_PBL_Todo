import { createSlice } from "@reduxjs/toolkit";
import { WORK_STATE } from "../constants";
import { v4 as uuidv4 } from "uuid";
export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todoList: [],
    selectedTodo: {},
  },
  reducers: {
    // 계획 Action
    addTodo: (state, { payload: text }) => {
      console.log("addTodo");
      state.todoList.unshift({
        uuid: uuidv4(),
        title: text,
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        state: WORK_STATE.BEFORE_START,
        editMode: true,
        details: [],
      });
    },
    editTodo: (state) => {
      console.log("editTodo");
    },
    editTodoStartTime: (state, { payload: { todoUUID, time } }) => {
      console.log("editTodoStartTime");
      console.log(todoUUID);
      console.log(time);
      const targetIndex = state.todoList.findIndex(
        (todo) => todo.uuid === todoUUID
      );
      state.todoList[targetIndex].startDate = time;
    },
    editTodoEndTime: (state, { payload: { todoUUID, time } }) => {
      console.log("editTodoEndTime");
      console.log(todoUUID);
      console.log(time);
      const targetIndex = state.todoList.findIndex(
        (todo) => todo.uuid === todoUUID
      );
      state.todoList[targetIndex].endDate = time;
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

    setSelectedTodo: (state, { payload: uuid }) => {
      console.log("setSelectedTodo");
      const targetIndex = state.todoList.findIndex(
        (todo) => todo.uuid === uuid
      );
      state.selectedTodo = state.todoList[targetIndex];
    },

    // 세부 계획 Actions
    addDetailTodo: (state, { payload: { uuid, text } }) => {
      const targetIndex = state.todoList.findIndex(
        (todo) => todo.uuid === uuid
      );
      state.todoList[targetIndex].details = [
        {
          uuid: uuidv4(),
          title: text,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          state: WORK_STATE.BEFORE_START,
        },
        ...state.todoList[targetIndex].details,
      ];
      state.selectedTodo.details = state.todoList[targetIndex].details;
      state.todoList[targetIndex].editMode =
        state.selectedTodo.editMode = false;
    },
    editedDetailTodo: (state) => {
      console.log("editedDetailTodo");
    },

    editDetailTodoStartTime: (
      state,
      { payload: { todoUUID, detailTodoUUID, time } }
    ) => {
      console.log("editTodoStartTime");
      const targetTodoIndex = state.todoList.findIndex(
        (todo) => todo.uuid === todoUUID
      );
      const targetDetailTodoIndex = state.todoList[
        targetTodoIndex
      ].details.findIndex((todo) => todo.uuid === detailTodoUUID);
      state.todoList[targetTodoIndex].details[targetDetailTodoIndex].startDate =
        time;
      state.selectedTodo.details[targetDetailTodoIndex].startDate = time;

      if (state.todoList[targetTodoIndex].details.length !== 1) {
        state.todoList[targetTodoIndex].startDate =
          state.selectedTodo.startDate =
            new Date(time) < new Date(state.todoList[targetTodoIndex].startDate)
              ? time
              : state.todoList[targetTodoIndex].startDate;
      } else {
        state.todoList[targetTodoIndex].startDate =
          state.selectedTodo.startDate = time;
      }
    },
    editDetailTodoEndTime: (
      state,
      { payload: { todoUUID, detailTodoUUID, time } }
    ) => {
      console.log("editTodoEndTime");
      const targetTodoIndex = state.todoList.findIndex(
        (todo) => todo.uuid === todoUUID
      );
      const targetDetailTodoIndex = state.todoList[
        targetTodoIndex
      ].details.findIndex((todo) => todo.uuid === detailTodoUUID);

      state.todoList[targetTodoIndex].details[targetDetailTodoIndex].endDate =
        time;
      state.selectedTodo.details[targetDetailTodoIndex].endDate = time;

      if (state.todoList[targetTodoIndex].details.length !== 1) {
        state.todoList[targetTodoIndex].endDate = state.selectedTodo.endDate =
          new Date(time) > new Date(state.todoList[targetTodoIndex].endDate)
            ? time
            : state.todoList[targetTodoIndex].endDate;
      } else {
        state.todoList[targetTodoIndex].endDate = state.selectedTodo.endDate =
          time;
      }
    },
    removeDetailTodo: (state, { payload: { todoUUID, detailTodoUUID } }) => {
      console.log("removeDetailTodo");
      const targetTodoIndex = state.todoList.findIndex(
        (todo) => todo.uuid === todoUUID
      );
      const targetDetailTodoIndex = state.todoList[
        targetTodoIndex
      ].details.findIndex((todo) => todo.uuid === detailTodoUUID);

      if (targetTodoIndex !== -1 && targetDetailTodoIndex !== -1) {
        state.todoList[targetTodoIndex].details.splice(
          targetDetailTodoIndex,
          1
        );
        state.selectedTodo.details = state.todoList[targetTodoIndex].details;

        state.todoList[targetTodoIndex].editMode = state.selectedTodo.editMode =
          Boolean(!state.selectedTodo.details.length);
      }
    },
  },
});

export const {
  addTodo,
  editTodo,
  editTodoStartTime,
  editTodoEndTime,
  changeTodoState,
  removeTodo,
  setSelectedTodo,
  addDetailTodo,
  editedDetailTodo,
  editDetailTodoStartTime,
  editDetailTodoEndTime,
  removeDetailTodo,
} = todoListSlice.actions;
export default todoListSlice.reducer;
