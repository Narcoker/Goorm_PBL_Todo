import React from "react";
import * as S from "./Main.style";
import Background from "../../components/commons/Background/Background";
import TodoList from "../../components/units/TodoList/TodoList";
import { MODE } from "../../app/constants";
import AddTodo from "../../components/units/AddTodo/AddTodo";
import DetailTodoList from "../../components/units/DetailTodoList/DetailTodoList";
import Quote from "../../components/units/Quote/Quote";

function MainPresenter({ pageState }) {
  return (
    <S.Wrapper>
      <Background />
      <S.Container>
        <S.ContainerLeft>
          <TodoList />
        </S.ContainerLeft>
        <S.ContainerRight>
          {pageState === MODE.ADD && <AddTodo />}
          {pageState === MODE.EDIT && <DetailTodoList />}
        </S.ContainerRight>
      </S.Container>
      <S.Footer>
        <Quote />
      </S.Footer>
    </S.Wrapper>
  );
}

export default MainPresenter;
