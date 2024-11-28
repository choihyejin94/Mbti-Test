import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import { BoxStyle, BoxWrapper, BtnStyle, HeaderStyle, Wrapper } from '../styles/HomeStyle'

const Home = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUserId(userData ? userData.userId : null);
  }, []);


  const NavigateToTestPage = () => {
    navigate("/test");
  };
  return (
    <>
      <Header menus={userId ? [
        {
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
        },
      ] : [
        {
          route: "/login",
          menu: "Login",
        },
        {
          route: "/signup",
          menu: "Signup",
        },
      ]} />
    <Wrapper>
      <HeaderStyle>
        <h1 className='text-6xl m-8'>무료 성격 테스트</h1>
        <p className='text-xl'>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      </HeaderStyle>
      <BoxWrapper>
        <BoxStyle>
          <p className='text-2xl mb-4'>성격 유형 검사</p>
          <p className='text-base'>자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.</p>
        </BoxStyle>
        <BoxStyle>
          <p className='text-2xl mb-4'>성격 유형 이해</p>
          <p className='text-base'>다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.</p>
        </BoxStyle>
        <BoxStyle>
          <p className='text-2xl mb-4'>팀 평가</p>
          <p className='text-base'>팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.</p>
        </BoxStyle>
      </BoxWrapper>
      <BtnStyle onClick={NavigateToTestPage}>내 성격 알아보러 가기</BtnStyle>
      </Wrapper>
    </>
  )
}

export default Home