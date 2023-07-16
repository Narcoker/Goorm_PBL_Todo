import styled from "styled-components";
import { WORK_STATE } from "../../../app/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 10px;
  margin: 15px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0);
    z-index: 1000;
  }
  position: relative;
  &:before {
    content: "";
    background-color: ${(props) =>
      props.$state === WORK_STATE.END ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)"};
    border-radius: 15px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transition: 0.5s;
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: ${(props) => {
    switch (props.$state) {
      case WORK_STATE.BEFORE_START:
        return "linear-gradient(320deg, #29323c 0%, #485563 100%)";
      case WORK_STATE.IN_PROGRESS:
        return "linear-gradient(320deg, #f6d365 0%, #fda085 100%)";
      case WORK_STATE.END:
        return "linear-gradient(320deg, #0ba360 0%, #3cba92 100%)";
      default:
        return "none";
    }
  }};
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.3);
  }
`;

// 중앙
export const ContentsCenter = styled.div`
  flex: 5;
`;

export const Title = styled.input`
  display: inline-block;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: ${(props) =>
    props.$state === WORK_STATE.END ? "line-through" : "none"};

  &:focus {
    border: 2px solid #336ad3;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  position: relative;
  padding-left: 5px;
`;
export const Date = styled.div`
  flex: 1;
  font-size: 14px;
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
  font-size: 12px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #515151;
  font-size: 16px;
  transition: 0.3s;
  cursor: pointer;
  z-index: 100;
  &:hover {
    transform: scale(1.2);
    color: #e33c3c;
  }
`;
