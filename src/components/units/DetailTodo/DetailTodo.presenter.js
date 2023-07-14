import React from "react";
import * as S from "./DetailTodo.style";

function DetailTodoPresenter({ handleSetModeADD, todoDetails }) {
  return (
    <S.Wrapper>
      <S.CloseButton onClick={() => handleSetModeADD()}></S.CloseButton>
      {todoDetails.length ? null : (
        <S.NotFoundTodoList>등록된 할일이 없습니다</S.NotFoundTodoList>
      )}
    </S.Wrapper>
  );
}

export default DetailTodoPresenter;
