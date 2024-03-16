import * as S from "./navbar.style";

export function Navbar() {
  return (
    <S.Header>
      <img src="/assets/logo.png" />
      <S.ButtonContainer>
        <S.MyButton>
          <S.MyIcon src="/assets/my.png" />
        </S.MyButton>
        <S.UploadButton>필기 등록</S.UploadButton>
      </S.ButtonContainer>
    </S.Header>
  );
}
