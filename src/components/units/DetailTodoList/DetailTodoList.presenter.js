import * as S from "./DetailTodoList.style";
import DetailTodo from "../DetailTodo/DetailTodo";
function DetailTodoListPresenter({
  isFocused,
  setIsFocused,
  inputDetailTodo,
  handleSetModeADD,
  handleInputTodo,
  handleAddDetailTodo,
  handleKeyUpEnter,
  selectedTodo,
}) {
  return (
    <S.Wrapper>
      <S.CloseButton onClick={() => handleSetModeADD()}></S.CloseButton>
      <S.Contents>
        <S.Header>
          <S.Title>{selectedTodo.title}</S.Title>
        </S.Header>

        <S.DetailTodoWrapper>
          {selectedTodo.details.length ? (
            selectedTodo.details.map((detailTodo) => (
              <DetailTodo key={detailTodo.uuid} todoUUID={selectedTodo.uuid} detailTodo={detailTodo} />
            ))
          ) : (
            <S.NotFoundTodoList>등록된 세부 계획이 없습니다</S.NotFoundTodoList>
          )}
        </S.DetailTodoWrapper>

        <S.InputWrapper $isFocused={isFocused}>
          <S.InputDetailTodo
            value={inputDetailTodo}
            onChange={(e) => handleInputTodo(e)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyUp={(e) =>
              handleKeyUpEnter(e, selectedTodo.uuid, inputDetailTodo)
            }
          />
          <S.SummitButton
            onClick={() =>
              handleAddDetailTodo(selectedTodo.uuid, inputDetailTodo)
            }
          >
            등록
          </S.SummitButton>
        </S.InputWrapper>
      </S.Contents>
    </S.Wrapper>
  );
}

export default DetailTodoListPresenter;
