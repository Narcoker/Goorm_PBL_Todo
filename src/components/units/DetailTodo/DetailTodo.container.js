import React from "react";
import DetailTodoPresenter from "../DetailTodo/DetailTodo.presenter";
import {
  changeDetailTodoState,
  editDetailTodoEndTime,
  editDetailTodoStartTime,
  removeDetailTodo,
} from "../../../app/TodoList/todoListSlice";
import { useDispatch } from "react-redux";

function DetailTodoListContainer({ detailTodo, todoUUID }) {
  const dispatch = useDispatch();

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
      handleRemoveTodo={handleRemoveTodo}
      handleEditDetailTodoStartTime={handleEditDetailTodoStartTime}
      handleEditDetailTodoEndTime={handleEditDetailTodoEndTime}
      handleChangeDetailTodoState={handleChangeDetailTodoState}
    />
  );
}

export default DetailTodoListContainer;
