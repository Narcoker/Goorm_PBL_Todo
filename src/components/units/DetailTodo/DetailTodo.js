import React from "react";
import DetailTodoContainer from "./DetailTodo.container";

function DetailTodo({ detailTodo, todoUUID }) {
  return <DetailTodoContainer todoUUID={todoUUID} detailTodo={detailTodo} />;
}

export default DetailTodo;
