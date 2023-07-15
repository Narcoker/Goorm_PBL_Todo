import React, { useState } from "react";
import AddTodoPresenter from "./AddTodo.presenter";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../app/TodoList/todoListSlice";

function AddTodoContainer() {
  const [inputTodo, setInputTodo] = useState("");
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
    e.key === "Enter" && handleAddTodo(text);
  };

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
