import * as S from "./note.style";
import { Quiz } from "../quiz";
import { Navbar } from "../navbar";

export function Note() {
  return (
    <>
      <Navbar />
      <S.NoteContainer>
        <S.TitleContainer>
          <S.Title>2주차 전사본</S.Title>
          <S.CourseInfoContainer>
            <S.CourseInfo style={{ color: "#919796" }}>과목명</S.CourseInfo>
            <S.CourseInfo>콘텐츠 아키텍처링</S.CourseInfo>
          </S.CourseInfoContainer>
          <S.CourseInfoContainer>
            <S.CourseInfo style={{ color: "#919796" }}>교수명</S.CourseInfo>
            <S.CourseInfo>김영미 교수님</S.CourseInfo>
          </S.CourseInfoContainer>

          <S.Date>2024-03-16</S.Date>
        </S.TitleContainer>

        <S.QuizContainer>
          <Quiz note_id={1} />
        </S.QuizContainer>

        <S.Content>
          서비스 경영을 이해하기 이전 서비스의 개념을 우선 이해해야 할 것
          같습니다. 서비스는 무형의 질적 재화를 생산하여 제공하는 활동이자
          고객이 요구하는 것을 충족시켜줌으로써 만족에 이르게 하는 활동을
          일컫습니다.다음으로는 서비스의 특성을 소개하게 될텐데, 서비스의 특성
          중 기억해야 할 것은 무형성입니다. 서비스는 기본적으로 눈에 보이지 않기
          때문에 무형성을 갖는다. 서비스는 구매 전에 냄새를 맡거나 만지거나 볼
          수 없기 떄문 서비스의 품질을 느끼기 위해서는 다른 유형적 특성들을
          활용해 푸질을 유추할 수 있습니다. 서비스는 기본적으로 이러한 무형적
          특성을 갖기 때문에 다양한 문젲ㅁ을 가집니다. 문제점에는 저장이
          불가능하고, 특허로 보호하기가 어려우며 진열하기 곤란하고 가격설정의
          기준이 모호하다는 등의 문제점을 지닙니다. 다음으로는 서비스의
          이질성입니다. 서비스의 이질성이란 서비스는 서비스를 제공하는 제공자에
          따라 서비스 품질이 달라진다고 하더라도 A와 B가 제공하는 서비스 품질이
          다르다는 것을 의미한다. 비분리성은서비스가 생산되고 소비되는 과정에
          소비자가 참여하는 특성이 있는데 소비가 발생될 때 서비스 제공자는
          소비자와 접점 역할을 수행한다.
        </S.Content>
      </S.NoteContainer>
    </>
  );
}
