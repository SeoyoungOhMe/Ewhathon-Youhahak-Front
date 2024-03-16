import React, { useState } from "react";
import Modal from "react-modal";
import * as S from "./quiz.style";
import { QuizBox } from "./quizBox/QuizBox";

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
      width: "300px",
      height: "400px",
      margin: "auto",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      padding: "20px",
    },
  };

  return (
    <>
      <button onClick={openModal}>모달 열기</button>

      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <QuizBox />
        <button onClick={closeModal}>닫기</button>
      </Modal>

      {isOpen}
    </>
  );
}
