import styled from "styled-components";

export const Slide = styled.div`
  height: 22px;
  width: 100%;
  overflow: hidden;
  position: relative;
  overflow: hidden;
`;

export const SlideInner = styled.div`
  width: inherit;
  position: absolute;
  height: 22px;
  top: ${(props) => props.$top}px;
  left: 0;
  transition: 1s;
`;

export const Text = styled.p`
  display: block;
  color: white;
  text-align: center;
`;
