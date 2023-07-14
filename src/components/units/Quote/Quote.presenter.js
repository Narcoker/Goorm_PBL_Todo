import React, { useEffect, useState } from "react";
import * as S from "./Quote.style";
function QuotePresenter({ Quotes }) {
  const [top, setTop] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTop((prevTop) =>
        prevTop <= -21 * (Quotes.length - 1) ? 0 : prevTop - 21
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Slide>
      <S.SlideInner $top={top}>
        {Quotes.map((quote) => (
          <S.Text key={quote}>{quote}</S.Text>
        ))}
      </S.SlideInner>
    </S.Slide>
  );
}

export default QuotePresenter;
