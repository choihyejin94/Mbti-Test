import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { logout } from '../api/auth';

const HeaderWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;

  p {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MenuWrapper = styled.div`
  a {
    padding: 0 30px 0 30px;
  }
`;

const BtnStyle = styled.button`
  width: 100px;
  height: 55px;
  font-size: 16px;
  background: none;
  border: 1px solid blue;
  border-radius: 8px;
  color: blue;
`;

const Header = ({
    menus = [
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
    ],
}) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        logout();
        navigate('/login');
    }

    return (
        <HeaderWrapper>
            <Link to="/">
                <p>Home</p>
            </Link>
            <MenuWrapper>
                {menus.map((menu, index) => {
                    return menu.type === "button" ? (
                        <BtnStyle key={index} onClick={handleLogout}>{menu.menu}</BtnStyle>
                    ) : (
                        <Link key={index} to={menu.route}>{menu.menu}</Link>
                    );
                })}
            </MenuWrapper>
        </HeaderWrapper>
    );
};

export default Header