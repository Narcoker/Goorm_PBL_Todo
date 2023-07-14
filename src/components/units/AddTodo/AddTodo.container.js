import React, { useEffect, useState } from "react";
import AddTodoPresenter from "./AddTodo.presenter";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  editTodo,
  removeTodo,
  addDetailTodo,
  editedDetailTodo,
  removeDetailTodo,
} from "../../../app/TodoList/todoListSlice";

function AddTodoContainer() {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };
  const handleEditTodo = () => {
    dispatch(editTodo());
  };
  const handleRemoveTodo = () => {
    dispatch(removeTodo());
  };
  const [inputTodo, setInputTodo] = useState("");
  const handleInputTodo = (e) => {
    setInputTodo(e.target.value);
  };
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);
  return (
    <AddTodoPresenter
      todoList={todoList}
      handleAddTodo={handleAddTodo}
      handleEditTodo={handleEditTodo}
      handleRemoveTodo={handleRemoveTodo}
      inputTodo={inputTodo}
      setInputTodo={setInputTodo}
      handleInputTodo={handleInputTodo}
    />
  );
}

export default AddTodoContainer;
