import * as S from "./upload.style";
import { Navbar } from "../navbar";

export function Upload() {
  return (
    <>
      <Navbar />
      <S.ScreenTitle>새 필기 노트</S.ScreenTitle>
      <S.PostContainer>
        <S.CourseInfoContainer>
          <S.CourseInfo>과목명</S.CourseInfo>
          <S.WriteCourseInfo
            type="text"
            placeholder="띄어쓰기 없이 작성해주세요."
          />
          <S.CourseInfo style={{ marginLeft: "45px" }}>교수명</S.CourseInfo>
          <S.WriteCourseInfo
            type="text"
            placeholder="띄어쓰기 없이 작성해주세요."
          />
        </S.CourseInfoContainer>
        <S.Title>제목</S.Title>
        <S.WriteTitle
          type="text"
          placeholder="필기에 대한 정보가 드러나도록 제목을 입력해주세요."
        />
        <S.Title style={{ marginBottom: "15px" }}>내용</S.Title>
        <S.WriteContent type="text" placeholder="필기 내용을 입력해주세요." />
        <S.ButtonContainer>
          <S.BackButton>취소하기</S.BackButton>
          <S.OkButton>등록하기</S.OkButton>
        </S.ButtonContainer>
      </S.PostContainer>
    </>
  );
}
