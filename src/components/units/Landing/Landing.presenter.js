import React from "react";
import * as S from "./Landing.style";
import Background from "../../commons/Background/Background";
import Logo from "../../commons/Logo/Logo";
function LandingPresenter({ handleButton }) {
  return (
    <S.Wrapper>
      <Background />
      <S.Contents>
        <Logo />
        <S.Paragraph>매일이 새로운 시작입니다.</S.Paragraph>
        <S.Paragraph>
          오늘을 Todo List로 잘 설계하고 당신의 목표를 이루세요!
        </S.Paragraph>
        <S.StartButton onClick={handleButton}>Get Started</S.StartButton>
      </S.Contents>
    </S.Wrapper>
  );
}

export default LandingPresenter;
