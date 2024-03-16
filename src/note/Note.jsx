import * as S from "./note.style";
import { Quiz } from "../quiz";
import { Navbar } from "../navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export function Note() {
  const [noteData, setNoteData] = useState({});

  useEffect(() => {
    const fetchNoteData = async () => {
      try {
        const response = await axios.get(
          //`${process.env.REACT_APP_BACKEND_URL}/notes/${note_id}`,
          `${process.env.REACT_APP_BACKEND_URL}/notes/1`,
          {
            headers: {
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMkBnbWFpbC5jb20iLCJleHAiOjE3MTA2OTc2MzAsImVtYWlsIjoiMTJAZ21haWwuY29tIn0.1pl8dvE8ihFOBMOr269PBnTPO8tyTynb_9ukSKHst3_h-qkWt5AAIS_jl5upDvUgNholuiz2I4iO_u1lUBiQyg`,
            },
          }
        );
        setNoteData(response.data);
      } catch (error) {
        console.error("Error fetching note data: ", error);
      }
    };
    fetchNoteData();
  }, []);

  return (
    <>
      <Navbar />
      <S.NoteContainer>
        <S.TitleContainer>
          <S.Title>{noteData.title}</S.Title>
          <S.CourseInfoContainer>
            <S.CourseInfo style={{ color: "#919796" }}>과목명</S.CourseInfo>
            <S.CourseInfo>{noteData.lectureName}</S.CourseInfo>
          </S.CourseInfoContainer>
          <S.CourseInfoContainer>
            <S.CourseInfo style={{ color: "#919796" }}>교수명</S.CourseInfo>
            <S.CourseInfo>{noteData.professorName}</S.CourseInfo>
          </S.CourseInfoContainer>

          <S.Date>
            {noteData.createdDate && noteData.createdDate.substring(0, 10)}
          </S.Date>
        </S.TitleContainer>

        <S.QuizContainer>
          <Quiz note_id={1} />
        </S.QuizContainer>

        <S.Content>{noteData.content}</S.Content>
      </S.NoteContainer>
    </>
  );
}
