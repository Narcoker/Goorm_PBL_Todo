import styled from "styled-components";
import { fadeIn } from "../keyframes";

export const wrapper = styled.div``;

export const Logo = styled.h1`
  opacity: 0;
  color: white;
  position: relative;
  top: 0;
  font-size: 80px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  margin-bottom: 55px;
  animation: 1.5s ${fadeIn} both ease;
  user-select: none;

  &:before {
    content: attr(data-text);
    position: absolute;
    top: -30px;
    left: 0;
    transform-origin: bottom;
    transform: rotateX(180deg);
    background: linear-gradient(to top, #fff -40%, transparent 90%);
    -webkit-background-clip: text;
    color: transparent;
    animation: 1.5s ${fadeIn} both ease 0.5s;
  }
`;
