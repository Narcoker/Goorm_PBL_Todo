import React from "react";
import TodoPresenter from "./Todo.presenter";
import { useDispatch } from "react-redux";
import {
  changeTodoState,
  editTodoEndTime,
  editTodoStartTime,
  removeTodo,
  setSelectedTodo,
} from "../../../app/TodoList/todoListSlice";
import { setModeADD, setModeEDIT } from "../../../app/PageMode/pageModeSlice";

function TodoContainer({ todo }) {
  const dispatch = useDispatch();

  const handleRemoveTodo = (e, uuid) => {
    e.stopPropagation();
    dispatch(removeTodo(uuid));
    dispatch(setModeADD());
  };

  const handleChangeTodoState = (e, uuid) => {
    e.stopPropagation();
    const hasDetailTodo = todo.details.length > 0;
    if (!hasDetailTodo) {
      dispatch(changeTodoState(uuid));
    }
  };
  const handleSetModeEDIT = (uuid) => {
    dispatch(setModeEDIT());
    dispatch(setSelectedTodo(uuid));
  };

  const handleEditTodoStartTime = (todoUUID, detailTodoUUID, time) => {
    dispatch(editTodoStartTime({ todoUUID, detailTodoUUID, time }));
  };

  const handleEditTodoEndTime = (todoUUID, detailTodoUUID, time) => {
    dispatch(editTodoEndTime({ todoUUID, detailTodoUUID, time }));
  };

  return (
    <TodoPresenter
      todo={todo}
      handleRemoveTodo={handleRemoveTodo}
      handleChangeTodoState={handleChangeTodoState}
      handleSetModeEDIT={handleSetModeEDIT}
      handleEditTodoStartTime={handleEditTodoStartTime}
      handleEditTodoEndTime={handleEditTodoEndTime}
    />
  );
}

export default TodoContainer;
