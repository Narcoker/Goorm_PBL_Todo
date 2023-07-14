import styled from "styled-components";
import { WORK_STATE } from "../../../app/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

// 왼쪽
export const ContentsLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StateCircle = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background-color: ${(props) => {
    return props.$state === WORK_STATE.BEFORE_START
      ? "#1e1e1e"
      : WORK_STATE.IN_PROGRESS
      ? "yellow"
      : "green";
  }};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

// 중앙
export const ContentsCenter = styled.div`
  flex: 5;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 5px;
`;

export const DataWrapper = styled.div`
  display: flex;
  position: relative;
`;
export const Date = styled.p`
  flex: 1;
`;

// 오른쪽
export const ContentsRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StateText = styled.p`
  margin-bottom: 8px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #515151;
  font-size: 24px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    color: #e33c3c;
  }
`;
