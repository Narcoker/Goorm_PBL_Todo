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
    setTodoList: (state, { payload: { todoList } }) => {
      state.todoList = todoList;
    },
    // 계획 Action
    addTodo: (state, { payload: text }) => {
      state.todoList.unshift({
        uuid: uuidv4(),
        title: text,
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        state: WORK_STATE.BEFORE_START,
        editMode: true,
        details: [],
      });
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    editTodo: (state, { payload: { uuid: todoUUID, newTodoTitle } }) => {
      const targetTodo = state.todoList.find((todo) => todo.uuid === todoUUID);
      targetTodo.title = newTodoTitle;

      state.selectedTodo = targetTodo;
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    editTodoStartTime: (state, { payload: { todoUUID, time } }) => {
      const targetTodo = state.todoList.find((todo) => todo.uuid === todoUUID);

      targetTodo.startDate = time;
      state.selectedTodo = targetTodo;
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    editTodoEndTime: (state, { payload: { todoUUID, time } }) => {
      const targetTodo = state.todoList.find((todo) => todo.uuid === todoUUID);

      targetTodo.endDate = time;
      state.selectedTodo = targetTodo;
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    changeTodoState: (state, { payload: uuid }) => {
      const targetTodo = state.todoList.find((todo) => todo.uuid === uuid);

      const updateState = (prevState, nextStateMap) => {
        return nextStateMap[prevState] || prevState;
      };
      targetTodo.state = updateState(targetTodo.state, {
        [WORK_STATE.BEFORE_START]: WORK_STATE.IN_PROGRESS,
        [WORK_STATE.IN_PROGRESS]: WORK_STATE.END,
        [WORK_STATE.END]: WORK_STATE.BEFORE_START,
      });

      state.selectedTodo = targetTodo;
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    removeTodo: (state, { payload: uuid }) => {
      state.todoList = state.todoList.filter((todo) => todo.uuid !== uuid);
    },

    setSelectedTodo: (state, { payload: uuid }) => {
      const targetTodo = state.todoList.find((todo) => todo.uuid === uuid);

      state.selectedTodo = targetTodo;
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    // 세부 계획 Actions
    addDetailTodo: (state, { payload: { uuid, text } }) => {
      const targetTodo = state.todoList.find((todo) => todo.uuid === uuid);

      targetTodo.details.unshift({
        uuid: uuidv4(),
        title: text,
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        state: WORK_STATE.BEFORE_START,
      });

      targetTodo.editMode = false;

      state.selectedTodo = targetTodo;
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    editedDetailTodo: (
      state,
      { payload: { todoUUID, detailTodoUUID, newDetailTitle } }
    ) => {
      const targetTodo = state.todoList.find((todo) => todo.uuid === todoUUID);
      const targetDetailTodo = targetTodo.details.find(
        (detailTodo) => detailTodo.uuid === detailTodoUUID
      );
      targetDetailTodo.title = newDetailTitle;

      state.selectedTodo = targetTodo;
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    editDetailTodoStartTime: (state, { payload: { todoUUID, detailTodoUUID, time } }) => {
      const targetTodo = state.todoList.find((todo) => todo.uuid === todoUUID);
      const targetDetailTodo = targetTodo.details.find(
        (detailTodo) => detailTodo.uuid === detailTodoUUID
      );

      targetDetailTodo.startDate = time;

      const isOnlyOneDetailTodo = targetTodo.details.length === 1;
      const isEarlierThanCurrentStartTime =
        new Date(time) < new Date(targetTodo.startDate);

      if (isOnlyOneDetailTodo || isEarlierThanCurrentStartTime) {
        targetTodo.startDate = time;
      }

      state.selectedTodo = targetTodo;
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    editDetailTodoEndTime: (state, { payload: { todoUUID, detailTodoUUID, time } }) => {
      const targetTodo = state.todoList.find((todo) => todo.uuid === todoUUID);
      const targetDetailTodo = targetTodo.details.find(
        (detailTodo) => detailTodo.uuid === detailTodoUUID
      );

      targetDetailTodo.endDate = time;

      const isOnlyOneDetailTodo = targetTodo.details.length === 1;
      const isLaterThanCurrentEndTime = new Date(time) > new Date(targetTodo.endDate);

      if (isOnlyOneDetailTodo || isLaterThanCurrentEndTime) {
        targetTodo.endDate = time;
      }

      state.selectedTodo = targetTodo;
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    changeDetailTodoState: (state, { payload: { todoUUID, detailTodoUUID } }) => {
      const targetTodo = state.todoList.find((todo) => todo.uuid === todoUUID);
      const targetDetailTodo = targetTodo.details.find(
        (todo) => todo.uuid === detailTodoUUID
      );

      const updateState = (prevState, nextStateMap) => {
        return nextStateMap[prevState] || prevState;
      };

      targetDetailTodo.state = updateState(targetDetailTodo.state, {
        [WORK_STATE.BEFORE_START]: WORK_STATE.IN_PROGRESS,
        [WORK_STATE.IN_PROGRESS]: WORK_STATE.END,
        [WORK_STATE.END]: WORK_STATE.BEFORE_START,
      });

      const isAllStateEqual = (details, state) =>
        details.every((detail) => detail.state === state);

      switch (true) {
        case isAllStateEqual(targetTodo.details, WORK_STATE.BEFORE_START):
          targetTodo.state = WORK_STATE.BEFORE_START;
          break;
        case isAllStateEqual(targetTodo.details, WORK_STATE.END):
          targetTodo.state = WORK_STATE.END;
          break;
        default:
          targetTodo.state = WORK_STATE.IN_PROGRESS;
      }

      state.selectedTodo = targetTodo;
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    removeDetailTodo: (state, { payload: { todoUUID, detailTodoUUID } }) => {
      const targetTodo = state.todoList.find((todo) => todo.uuid === todoUUID);
      const targetDetailTodoIndex = targetTodo.details.findIndex(
        (detail) => detail.uuid === detailTodoUUID
      );

      if (targetDetailTodoIndex !== -1) {
        targetTodo.details.splice(targetDetailTodoIndex, 1);
        targetTodo.editMode = targetTodo.details.length === 0;
      }

      state.selectedTodo = targetTodo;
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
  },
});

export const {
  setTodoList,
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
  changeDetailTodoState,
  removeDetailTodo,
} = todoListSlice.actions;
export default todoListSlice.reducer;
