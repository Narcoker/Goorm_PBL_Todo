import React from "react";
import TodoPresenter from "./Todo.presenter";
import { useDispatch } from "react-redux";
import {
  changeTodoState,
  removeTodo,
} from "../../../app/TodoList/todoListSlice";

function TodoContainer({ todo }) {
  const dispatch = useDispatch((state) => state.todoList);
  const handleRemoveTodo = (uuid) => {
    dispatch(removeTodo(uuid));
  };
  const handleChangeTodoState = (uuid) => {
    dispatch(changeTodoState(uuid));
  };
  return (
    <TodoPresenter
      todo={todo}
      handleRemoveTodo={handleRemoveTodo}
      handleChangeTodoState={handleChangeTodoState}
    />
  );
}

export default TodoContainer;
