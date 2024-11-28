import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { register } from '../api/auth';
import Header from '../components/Header';
import { SignupBtn, Wrapper } from '../styles/LoginStyle';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (userId, password, nickname) => {
    try {
      const response = await register(userId, password, nickname);
      if (response) {
        alert("회원가입이 완료되었습니다.");
        navigate('/login');
      }
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      console.error("Signup error:", error);
    }
  }

  return (
    <div>
      <Header menus={[{
        route: "/login",
        menu: "Login"
      },]} />
      <Wrapper>
        <h1 className='text-4xl m-5'>
          SIGN UP
        </h1>
        <AuthForm mode='signup' onSubmit={handleSignup} />
        <div>
          <p className='text-sm mt-2'>
            Already have an account?{" "}
            <Link to="/login">
              <SignupBtn>Login</SignupBtn>
            </Link>
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Signup;