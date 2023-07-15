import React, { useState } from "react";
import DetailTodoListPresenter from "./DetailTodoList.presenter";
import { useDispatch, useSelector } from "react-redux";
import { setModeADD } from "../../../app/PageMode/pageModeSlice";
import { addDetailTodo } from "../../../app/TodoList/todoListSlice";

function DetailTodoListContainer() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputDetailTodo, setInputDetailTodo] = useState("");

  const dispatch = useDispatch();
  const selectedTodo = useSelector((state) => state.todoList.selectedTodo);
  const handleSetModeADD = () => {
    dispatch(setModeADD());
  };
  const handleInputTodo = (e) => {
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
      handleInputTodo={handleInputTodo}
      handleAddDetailTodo={handleAddDetailTodo}
      handleKeyUpEnter={handleKeyUpEnter}
      selectedTodo={selectedTodo}
    />
  );
}

export default DetailTodoListContainer;
