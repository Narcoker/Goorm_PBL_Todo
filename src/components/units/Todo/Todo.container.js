import React from "react";
import TodoPresenter from "./Todo.presenter";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../../app/TodoList/todoListSlice";

function TodoContainer({ todo }) {
  const dispatch = useDispatch((state) => state.todoList);
  const handleRemoveTodo = (uuid) => {
    dispatch(removeTodo(uuid));
  };
  return <TodoPresenter todo={todo} handleRemoveTodo={handleRemoveTodo} />;
}

export default TodoContainer;
