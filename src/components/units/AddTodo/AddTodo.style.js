import styled from "styled-components";
import { fadeIn } from "../../commons/keyframes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Paragraph = styled.p`
  color: #bbbbbb;
  font-size: ${(props) => (props.$big ? "1.5em" : "1em")};
  animation: 1.5s ${fadeIn} both ease 1s;
  user-select: none;
`;

export const InputWork = styled.input`
  width: 70%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.46);
  border-radius: 15px;
  margin: 24px 0;
  outline: none;
  text-align: center;
  font-size: 1.1em;
  animation: 1.5s ${fadeIn} both ease 1.5s;

  &:focus {
    background-color: white;
    border: 3px solid #336ad3;
  }
`;

export const SubmitButton = styled.button`
  border-radius: 15px;
  width: 96px;
  height: 43px;
  border: 3px solid white;
  background-color: #515151;
  color: white;
  transition: 0.5s;
  animation: 1.5s ${fadeIn} both ease 1.5s;

  &:hover {
    border: 3px solid #515151;
    background-color: white;
    color: #515151;
  }
`;
