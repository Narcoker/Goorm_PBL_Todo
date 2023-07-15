import * as S from "./Quote.style";
function QuotePresenter({ Quotes, top }) {
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
