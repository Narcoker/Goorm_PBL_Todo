import styled from "styled-components";
import { fadeIn } from "../../commons/keyframes";

export const Wrapper = styled.div`
  /* width: 653px; */
  width: 68%;
  /* height: 682px; */
  height: 80%;

  background-color: rgba(217, 217, 217, 0.22);
  padding: 52px 33px;
  border-radius: 20px;
  position: absolute;
  top: 132px;
  left: 180px;
  overflow: auto;
  animation: ${fadeIn} ease both 1.5s;
`;

export const CloseButton = styled.div`
  display: inline-block;
  border-radius: 50%;
  background-color: #515151;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15px;
  right: 15px;
  transition: 0.5s;

  &:hover {
    background-color: red;
  }
`;

export const NotFoundTodoList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #222222;
  user-select: none;
`;
