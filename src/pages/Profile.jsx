import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../api/auth";
import Header from "../components/Header";
import MbtiContext from "../context/MbtiContext"
import { BtnStyle, FormStyle, InputStyle, LableStyle } from "../styles/AuthFormStyle";
import { Wrapper } from "../styles/LoginStyle";

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(MbtiContext);
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nickname", nickname);

      const accessToken = localStorage.getItem("token");
      const updatedUser = await updateProfile(formData, accessToken);
      
      if (updatedUser.success) {
        alert("프로필이 변경되었습니다!");
        setUser({ ...user, nickname });
        navigate("/")
      }
    } catch (error) {
      alert("프로필 수정에 실패했습니다. 다시 시도해주세요");
    }
  };

  return (
    <div>
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
        <h1 className='text-4xl m-5'>Edit Profile</h1>
        <FormStyle onSubmit={handleSubmit}>
          <div>
            <LableStyle>
              Nickname
            </LableStyle>
            <InputStyle value={nickname} onChange={handleNicknameChange} />
          </div>
          <BtnStyle type="submit">
            Update Profile
          </BtnStyle>
        </FormStyle>
      </Wrapper>
    </div>
  );
};

export default Profile;