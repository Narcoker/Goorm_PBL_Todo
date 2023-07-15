import React from "react";
import * as S from "./AddTodo.style";
import Logo from "../../commons/Logo/Logo";

function AddTodoPresenter({
  handleAddTodo,
  handleKeyDownEnter,
  inputTodo,
  handleInputTodo,
}) {
  return (
    <S.Wrapper>
      <Logo />
      <S.Paragraph $big>할 일을 입력하고 당신의 하루를 계획해보세요</S.Paragraph>
      <S.Paragraph>천천히 시작해도 괜찮아요</S.Paragraph>
      <S.InputWork
        value={inputTodo}
        onChange={(e) => handleInputTodo(e)}
        onKeyUp={(e) => handleKeyDownEnter(e, inputTodo)}
      ></S.InputWork>
      <S.SubmitButton type="button" onClick={() => handleAddTodo(inputTodo)}>
        등록
      </S.SubmitButton>
    </S.Wrapper>
  );
}

export default AddTodoPresenter;
