import React, { useEffect, useState } from "react";
import AddTodoPresenter from "./AddTodo.presenter";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../../app/TodoList/todoListSlice";

function AddTodoContainer() {
  const [inputTodo, setInputTodo] = useState("");
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const handleAddTodo = (text) => {
    if (!text) return;
    dispatch(addTodo(text));
    setInputTodo("");
  };
  const handleInputTodo = (e) => {
    setInputTodo(e.target.value);
  };
  const handleKeyDownEnter = (e, text) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      handleAddTodo(text);
    }
  };
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);
  return (
    <AddTodoPresenter
      handleAddTodo={handleAddTodo}
      handleKeyDownEnter={handleKeyDownEnter}
      inputTodo={inputTodo}
      handleInputTodo={handleInputTodo}
    />
  );
}

export default AddTodoContainer;
