import * as S from "./quizBox.style";

export function QuizBox() {
  return (
    <>
      <S.Question>
        Q.서비스의 특성 중 제공자에 따라 품질이 달라지는 것을 무엇이라고 하나요?
      </S.Question>

      <S.WriteAnswer type="text" placeholder="답안 작성하기" />
    </>
  );
}
