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
  animation: 1s ${fadeIn} ease both 1.5s;
`;

export const NotFoundTodoList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #515151;
`;
