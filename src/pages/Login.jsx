import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import AuthForm from '../components/AuthForm';
import Header from '../components/Header';
import { SignupBtn, Wrapper } from '../styles/LoginStyle';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      // 로그인 요청 및 토큰 추출
      const response = await login({ id: formData.userId, password: formData.password });
      const { nickname } = response;
      if (response) {
        alert(`Welcome! ${nickname}, enjoy the MBTI TEST!`)
      }

      navigate("/");

    } catch (error) {
      console.error("로그인 요청 중 오류:", error);
    }
  };

  return (
    <div>
      <Header menus={[{
        route: "/signup",
        menu: "SignUp"
      },]} />
      <Wrapper>
        <h1 className='text-4xl m-5'>LOGIN</h1>
        <AuthForm mode='login' onSubmit={handleLogin}/>
        <div>
          <p className='text-sm mt-2'>
            Don't have an account?{" "}
            <Link to="/signup">
              <SignupBtn>SignUp</SignupBtn>
            </Link>
          </p>
        </div>
      </Wrapper>
    </div>
  );
}

export default Login