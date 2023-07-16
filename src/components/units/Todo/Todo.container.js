import React, { useEffect, useState } from "react";
import TodoPresenter from "./Todo.presenter";
import { useDispatch } from "react-redux";
import { setModeADD, setModeEDIT } from "../../../app/PageMode/pageModeSlice";
import {
  changeTodoState,
  editTodo,
  editTodoEndTime,
  editTodoStartTime,
  removeTodo,
  setSelectedTodo,
} from "../../../app/TodoList/todoListSlice";

function TodoContainer({ todo }) {
  const [inputTodoTitle, setInputTodoTitle] = useState(todo.title);

  const dispatch = useDispatch();

  const handleInputTodoTitle = (e, uuid) => {
    const newTodoTitle = e.target.value;
    setInputTodoTitle(newTodoTitle);
    dispatch(editTodo({ uuid, newTodoTitle }));
  };

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

  useEffect(()=>{
    setInputTodoTitle(todo.title);
  },[todo])

  return (
    <TodoPresenter
      todo={todo}
      inputTodoTitle={inputTodoTitle}
      handleInputTodoTitle={handleInputTodoTitle}
      handleRemoveTodo={handleRemoveTodo}
      handleChangeTodoState={handleChangeTodoState}
      handleSetModeEDIT={handleSetModeEDIT}
      handleEditTodoStartTime={handleEditTodoStartTime}
      handleEditTodoEndTime={handleEditTodoEndTime}
    />
  );
}

export default TodoContainer;
