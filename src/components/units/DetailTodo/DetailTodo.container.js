import React, { useState } from "react";
import DetailTodoPresenter from "../DetailTodo/DetailTodo.presenter";
import {
  changeDetailTodoState,
  editDetailTodoEndTime,
  editDetailTodoStartTime,
  editedDetailTodo,
  removeDetailTodo,
} from "../../../app/TodoList/todoListSlice";
import { useDispatch } from "react-redux";

function DetailTodoListContainer({ detailTodo, todoUUID }) {
  const dispatch = useDispatch();

  const [detailTodoTitle, setDetailTodoTitle] = useState(detailTodo.title);

  const handleDetailTodoTitle = (e, todoUUID, detailTodoUUID) => {
    const newDetailTitle = e.target.value;
    setDetailTodoTitle(newDetailTitle);
    dispatch(editedDetailTodo({ todoUUID, detailTodoUUID, newDetailTitle }));
  };

  const handleRemoveTodo = (e, todoUUID, detailTodoUUID) => {
    e.stopPropagation();
    dispatch(removeDetailTodo({ todoUUID, detailTodoUUID }));
  };

  const handleEditDetailTodoStartTime = (todoUUID, detailTodoUUID, time) => {
    dispatch(editDetailTodoStartTime({ todoUUID, detailTodoUUID, time }));
  };

  const handleEditDetailTodoEndTime = (todoUUID, detailTodoUUID, time) => {
    dispatch(editDetailTodoEndTime({ todoUUID, detailTodoUUID, time }));
  };

  const handleChangeDetailTodoState = (e, todoUUID, detailTodoUUID) => {
    e.stopPropagation();
    dispatch(changeDetailTodoState({ todoUUID, detailTodoUUID }));
  };

  return (
    <DetailTodoPresenter
      todoUUID={todoUUID}
      detailTodo={detailTodo}
      detailTodoTitle={detailTodoTitle}
      handleDetailTodoTitle={handleDetailTodoTitle}
      handleRemoveTodo={handleRemoveTodo}
      handleEditDetailTodoStartTime={handleEditDetailTodoStartTime}
      handleEditDetailTodoEndTime={handleEditDetailTodoEndTime}
      handleChangeDetailTodoState={handleChangeDetailTodoState}
    />
  );
}

export default DetailTodoListContainer;
