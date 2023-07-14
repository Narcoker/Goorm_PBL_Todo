import React from "react";
import TodoPresenter from "./Todo.presenter";
import { useDispatch } from "react-redux";
import {
  changeTodoState,
  removeTodo,
  setSelectedDetails,
} from "../../../app/TodoList/todoListSlice";
import { setModeADD, setModeEDIT } from "../../../app/PageMode/pageModeSlice";

function TodoContainer({ todo }) {
  const dispatch = useDispatch();
  const handleRemoveTodo = (e, uuid) => {
    e.stopPropagation();
    dispatch(removeTodo(uuid));
    dispatch(setModeADD());
  };
  const handleChangeTodoState = (e,uuid) => {
    e.stopPropagation();
    dispatch(changeTodoState(uuid));
  };
  const handleSetModeEDIT = (uuid) => {
    dispatch(setModeEDIT());
    dispatch(setSelectedDetails(uuid));
  };
  return (
    <TodoPresenter
      todo={todo}
      handleRemoveTodo={handleRemoveTodo}
      handleChangeTodoState={handleChangeTodoState}
      handleSetModeEDIT={handleSetModeEDIT}
    />
  );
}

export default TodoContainer;
