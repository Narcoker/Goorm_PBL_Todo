import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;

  &:before {
    content: "";
    background-color: rgba(0, 0, 0, 0.33);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const BackgroundVideo = styled.video`
  position: relative;
  object-fit: cover;
  z-index: -1;
`;
