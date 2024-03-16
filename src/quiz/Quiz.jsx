import React, { useState } from "react";
import Modal from "react-modal";
import * as S from "./quiz.style";
import { QuizBox } from "./quizBox";

export function Quiz() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      width: "1000px",
      height: "600px",
      margin: "auto",
      borderRadius: "30px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      padding: "20px",
    },
  };

  return (
    <>
      <S.Button onClick={openModal}>퀴즈 생성하기</S.Button>

      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <S.Close onClick={closeModal}>
          <S.CloseIcon src="/assets/닫기.png" alt="닫기 버튼" />
        </S.Close>
        <S.TitleContainer>
          <S.Title>서비스 경영 퀴즈</S.Title>
          <S.Intro>다음은 필기 내용을 바탕으로 생성된 퀴즈입니다.</S.Intro>
        </S.TitleContainer>

        <QuizBox />
        <div />
        <S.ButtonContainer>
          <S.Button>채점하기</S.Button>
        </S.ButtonContainer>
      </Modal>
    </>
  );
}
