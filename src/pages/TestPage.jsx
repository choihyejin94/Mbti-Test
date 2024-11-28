import React, { useState } from 'react';
import { questions } from '../data/questions';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { FormStyle, QuestionWrapper, RadioContainer, RadioStyle, Wrapper } from '../styles/TestPageStyle';

const TestPage = () => {
  const [MbtiAnswers, setMbtiAnswers] = useState({});
  const navigate = useNavigate();

  const handleOptionChange = (questionId, option) => {
    setMbtiAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 결과 페이지로 이동
      navigate('/result', { state: { MbtiAnswers } });
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <>
      <Header menus={[{
        route: "/profile",
        menu: "Profile",
      },
      {
        route: "/test",
        menu: "Test",
      },
      {
        route: "/results",
        menu: "Results"
      },
      {
        menu: "Logout",
        type: "button",
      },]} />
      <Wrapper>
        <h1 className='text-4xl'>MBTI TEST</h1>
        <FormStyle onSubmit={handleSubmit}>
          <QuestionWrapper>
            {questions.map((q) => (
              <div key={q.id}>
                <h2>{q.question}</h2>
                {q.options.map((option) => (
                  <RadioContainer key={option}>
                    <label>
                      <RadioStyle
                        type="radio"
                        name={`question-${q.id}`}
                        value={option}
                        onChange={() => handleOptionChange(q.id, option)}
                        checked={MbtiAnswers[q.id] === option}
                      />
                      {option}
                    </label>
                  </RadioContainer>
                ))}
              </div>
            ))}
          </QuestionWrapper>
          <button type="submit">Submit</button>
        </FormStyle>
      </Wrapper>
    </>
  );
};

export default TestPage;
