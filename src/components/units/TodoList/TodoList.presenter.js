import React from "react";
import * as S from "./TodoList.style";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

function TodoListPresenter() {
  const todoList = useSelector((state) => state.todoList);

  return (
    <S.Wrapper>
      {todoList.map((todo) => (
        <Todo key={todo.uuid} todo={todo} />
      ))}
    </S.Wrapper>
  );
}

export default TodoListPresenter;
