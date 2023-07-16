import React, { useState } from "react";
import DetailTodoListPresenter from "./DetailTodoList.presenter";
import { useDispatch, useSelector } from "react-redux";
import { setModeADD } from "../../../app/PageMode/pageModeSlice";
import { addDetailTodo, editTodo } from "../../../app/TodoList/todoListSlice";

function DetailTodoListContainer() {
  const dispatch = useDispatch();
  const selectedTodo = useSelector((state) => state.todoList.selectedTodo);

  const [isFocused, setIsFocused] = useState(false);
  const [inputTodo, setInputTodo] = useState(selectedTodo.title);
  const [inputDetailTodo, setInputDetailTodo] = useState("");

  const handleInputTodoTitle = (e, uuid) => {
    const newTodoTitle = e.target.value;
    setInputTodo(newTodoTitle);
    dispatch(editTodo({ uuid, newTodoTitle }));
  };

  const handleSetModeADD = () => {
    dispatch(setModeADD());
  };
  const handleInputDetailTodo = (e) => {
    setInputDetailTodo(e.target.value);
  };
  const handleAddDetailTodo = (uuid, text) => {
    if (!text) return;
    dispatch(addDetailTodo({ uuid, text }));
    setInputDetailTodo("");
  };
  const handleKeyUpEnter = (e, uuid, text) => {
    e.key === "Enter" && handleAddDetailTodo(uuid, text);
  };

  return (
    <DetailTodoListPresenter
      isFocused={isFocused}
      setIsFocused={setIsFocused}
      inputDetailTodo={inputDetailTodo}
      handleSetModeADD={handleSetModeADD}
      inputTodo={inputTodo}
      handleInputTodoTitle={handleInputTodoTitle}
      handleInputDetailTodo={handleInputDetailTodo}
      handleAddDetailTodo={handleAddDetailTodo}
      handleKeyUpEnter={handleKeyUpEnter}
      selectedTodo={selectedTodo}
    />
  );
}

export default DetailTodoListContainer;
