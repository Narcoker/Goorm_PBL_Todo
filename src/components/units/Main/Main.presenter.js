import React from "react";
import * as S from "./Main.style";
import Background from "../../commons/Background/Background";
import TodoList from "../TodoList/TodoList";
import { MODE } from "../../../app/constants";
import AddTodo from "../AddTodo/AddTodo";
import Quote from "../Quote/Quote";

function MainPresenter({ mode, setMode }) {
  return (
    <S.Wrapper>
      <Background />
      <S.Container>
        <S.ContainerLeft>
          <TodoList />
        </S.ContainerLeft>
        <S.ContainerRight>
          <AddTodo />
          {mode === MODE.ADD && AddTodo}
          {mode === MODE.EDIT && null}
        </S.ContainerRight>
      </S.Container>
      <S.Footer>
        <Quote />
      </S.Footer>
    </S.Wrapper>
  );
}

export default MainPresenter;
