import React from "react";
import * as S from "./DetailTodo.style";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DateSelector from "../../commons/DateSelector";

function DetailTodoListPresenter({
  todoUUID,
  detailTodo,
  handleRemoveTodo,
  handleEditDetailTodoStartTime,
  handleEditDetailTodoEndTime,
}) {
  const func = () => {};
  return (
    <S.Wrapper $state={detailTodo.state}>
      <S.ContentsLeft>
        <S.StateCircle
          $state={detailTodo.state}
          // onClick={(e) => {
          //   handleChangeTodoState(e, detailTodo.uuid);
          // }}
        />
      </S.ContentsLeft>
      <S.ContentsCenter>
        <S.Title $state={detailTodo.state}>{detailTodo.title}</S.Title>
        <S.DataWrapper>
          {/* <S.Date>시작 일: {detailTodo.startDate}</S.Date>
          <S.Date $right>종료 일: {detailTodo.endDate}</S.Date> */}
          <S.Date>
            <DateSelector
              time={new Date(detailTodo.startDate)}
              disabled={false}
              onChnageHandler={handleEditDetailTodoStartTime}
              parentUUID={todoUUID}
              uuid={detailTodo.uuid}
              minDate={null}
              small
            />
          </S.Date>
          <S.Date>
            <DateSelector
              time={new Date(detailTodo.endDate)}
              disabled={false}
              onChnageHandler={handleEditDetailTodoEndTime}
              parentUUID={todoUUID}
              uuid={detailTodo.uuid}
              minDate={detailTodo.startDate}
              small
            />
          </S.Date>
        </S.DataWrapper>
      </S.ContentsCenter>
      <S.ContentsRight>
        <S.StateText>{detailTodo.state}</S.StateText>
        <S.StyledIcon
          icon={faTrash}
          onClick={(e) => {
            handleRemoveTodo(e, todoUUID, detailTodo.uuid);
          }}
        />
      </S.ContentsRight>
    </S.Wrapper>
  );
}

export default DetailTodoListPresenter;
