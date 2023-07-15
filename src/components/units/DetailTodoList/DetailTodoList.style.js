import styled from "styled-components";
import { fadeIn } from "../../commons/keyframes";

export const Wrapper = styled.div`
  width: 68%;
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

export const Contents = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-225deg, white 0%, #efe9f0 100%);
  border-radius: 20px;
  padding: 33px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Header = styled.div``;

export const Title = styled.h1`
  font-size: 1.4em;
  font-weight: 400;
`;

export const DetailTodoWrapper = styled.div`
  flex: 7;
  overflow: auto;
`;

export const NotFoundTodoList = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d1d1d1;
  user-select: none;
`;

export const InputWrapper = styled.div`
  flex: 1;
  border-radius: 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
  gap: 10px;
  padding: 0 10px;
  background-color: white;
  border: ${(props) =>
    props.$isFocused ? "2px solid #336AD3" : "2px solid white"};
`;

export const InputDetailTodo = styled.input`
  height: 60%;
  flex: 10;
  border: none;
  outline: none;
`;

export const SummitButton = styled.button`
  height: 60%;
  flex: 2;
  border: 3px solid #515151;
  border-radius: 12px;
  background-color: #515151;
  transition: 0.5s;
  color: white;
  &:hover {
    transform: scale(1.05);
  }
`;
