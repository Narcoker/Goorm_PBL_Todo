import styled from "styled-components";
import { fadeIn } from "../../commons/keyframes";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Paragraph = styled.p`
  color: #bbbbbb;
  text-align: center;
  animation: 1.5s ${fadeIn} both ease 1s;
  user-select: none;
`;

export const StartButton = styled.button`
  border-radius: 15px;
  width: 201px;
  height: 43px;
  border: 3px solid white;
  background-color: #515151;
  color: white;
  margin-top: 27px;
  transition: 0.5s;
  animation: 1.5s ${fadeIn} both ease 1.5s;

  &:hover {
    border: 3px solid #515151;
    background-color: white;
    color: #515151;
  }
`;
