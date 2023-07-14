import React from "react";
import * as S from "./Todo.style";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoPresenter({
  todo,
  handleRemoveTodo,
  handleChangeTodoState,
  handleSetModeEDIT,
}) {
  return (
    <S.Wrapper $state={todo.state} onClick={() => handleSetModeEDIT(todo.uuid)}>
      <S.ContentsLeft>
        <S.StateCircle
          $state={todo.state}
          onClick={(e) => {
            handleChangeTodoState(e, todo.uuid);
          }}
        />
      </S.ContentsLeft>
      <S.ContentsCenter>
        <S.Title $state={todo.state}>{todo.title}</S.Title>
        <S.DataWrapper>
          <S.Date>시작 일: {todo.startDate}</S.Date>
          <S.Date $right>종료 일: {todo.endDate}</S.Date>
        </S.DataWrapper>
      </S.ContentsCenter>
      <S.ContentsRight>
        <S.StateText>{todo.state}</S.StateText>
        <S.StyledIcon
          icon={faTrash}
          onClick={(e) => {
            handleRemoveTodo(e, todo.uuid);
          }}
        />
      </S.ContentsRight>
    </S.Wrapper>
  );
}

export default TodoPresenter;
