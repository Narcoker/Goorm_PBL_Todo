import React, { useEffect } from "react";
import DetailTodoPresenter from "./DetailTodo.presenter";
import { useDispatch, useSelector } from "react-redux";
import { setModeADD } from "../../../app/PageMode/pageModeSlice";

function DetailTodoContainer() {
  const dispatch = useDispatch();
  const handleSetModeADD = () => {
    dispatch(setModeADD());
  };
  const todoDetails = useSelector((state) => state.todoList.selectedDetails);

  useEffect(() => {
    console.log(todoDetails);
  }, [todoDetails]);
  return (
    <DetailTodoPresenter
      handleSetModeADD={handleSetModeADD}
      todoDetails={todoDetails}
    />
  );
}

export default DetailTodoContainer;
