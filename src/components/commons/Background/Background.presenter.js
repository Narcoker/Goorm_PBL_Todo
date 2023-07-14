import React from "react";
import * as S from "./Background.style";
import BackgroundImageSrc from "../../../static/background.png";
import BackgroundVideoSrc from "../../../static/background.mp4";
function BackgroundPresenter() {
  return (
    <S.Wrapper>
      <S.BackgroundVideo
        src={BackgroundVideoSrc}
        poster={BackgroundImageSrc}
        autoPlay
        muted
        loop
      />
    </S.Wrapper>
  );
}

export default BackgroundPresenter;
