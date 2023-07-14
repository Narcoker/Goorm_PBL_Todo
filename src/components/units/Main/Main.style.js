import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid red;
  flex: 10;
`;

export const ContainerLeft = styled.div`
  flex: 1;
  border: 1px solid yellow;
  position: relative;
`;

export const ContainerRight = styled.div`
  flex: 1;
  border: 1px solid yellow;
`;

export const Footer = styled.div`
  flex: 1;
  width: 100%;
  border: 1px solid green;
`;
