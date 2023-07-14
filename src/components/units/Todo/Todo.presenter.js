import React from "react";
import * as S from "./Todo.style";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoPresenter({ todo, handleRemoveTodo }) {
  return (
    <S.Wrapper>
      <S.ContentsLeft>
        <S.StateCircle $state={todo.state} />
      </S.ContentsLeft>
      <S.ContentsCenter>
        <S.Title>{todo.title}</S.Title>
        <S.DataWrapper>
          <S.Date>시작 일: {todo.startDate}</S.Date>
          <S.Date $right>종료 일: {todo.endDate}</S.Date>
        </S.DataWrapper>
      </S.ContentsCenter>
      <S.ContentsRight>
        <S.StateText>{todo.state}</S.StateText>
        <S.StyledIcon
          icon={faTrash}
          onClick={() => {
            handleRemoveTodo(todo.uuid);
          }}
        />
      </S.ContentsRight>
    </S.Wrapper>
  );
}

export default TodoPresenter;
