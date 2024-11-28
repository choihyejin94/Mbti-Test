import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createTestResult } from '../api/testResults';
import Header from '../components/Header';
import { MbtiWrapper, Wrapper } from '../styles/TestResultStyle';
import CalculateMbti from '../utils/CalculateMBTI';
import { mbtiDescriptions} from "../utils/MbtiCalculator"

const TestResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // 테스트 페이지에서 전달된 결과에 접근
  const { MbtiAnswers } = location.state || { MbtiAnswers: {} };

  // answers 배열을 구성
  const answers = [
    { type: "E/I", answer: MbtiAnswers[0] || "E" },
    { type: "S/N", answer: MbtiAnswers[1] || "S" },
    { type: "T/F", answer: MbtiAnswers[2] || "F" },
    { type: "J/P", answer: MbtiAnswers[3] || "P" },
  ];

  // MBTI 결과 계산
  const mbtiResult = CalculateMbti(answers);

  // localStorage에서 사용자 정보 가져오기
  const userData = JSON.parse(localStorage.getItem("user"));
  const { userId, nickname } = userData || {};

  // 테스트 결과를 서버에 저장
  const resultData = {
    userid: userId,
    username: nickname,
    mbti: mbtiResult,
    description: mbtiDescriptions[mbtiResult],
    createdAt: new Date().toISOString(),
    visibility: true,
  };

  // 결과를 서버에 저장
  useEffect(() => {
    const saveResult = async () => {
      try {
        await createTestResult(resultData);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    saveResult();
  }, []);

  // 결과 페이지로 이동하는 함수
  const GotoResults = () => {
    navigate('/results');
  };

  return (
    <>
      <Header menus={[
        { route: "/profile", menu: "Profile" },
        { route: "/test", menu: "Test" },
        { route: "/results", menu: "Results" },
        { menu: "Logout", type: "button" },
      ]} />
      <Wrapper>
        <h1 className='text-4xl'>MBTI RESULT</h1>
        <MbtiWrapper>
          <h2 className='text-xl'>Your MBTI Type: <span className='text-3xl'>{mbtiResult}</span></h2>
          <p>{mbtiDescriptions[mbtiResult]}</p>
        </MbtiWrapper>
        <button onClick={GotoResults}>Go to the Results Page</button>
      </Wrapper>
    </>
  );
};

export default TestResultPage;
