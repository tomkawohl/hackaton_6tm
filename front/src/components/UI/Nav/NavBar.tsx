/*
 * File: /src/components/UI/Nav/NavBar.tsx
 * Created Date: Wednesday, January 17th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Wed Jan 17 2024
 * Modified By: Nathan Coquelin
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import styled from 'styled-components';
import { default as theme } from '../../theme/theme';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '../Button/ToggleButton';

export default function NavBar() {
  const navigate = useNavigate();

  const handleThemeChange = () => {
    theme.color_bg = '#ffffff';
  };

  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <NavBarStyled>
      <div className="logo">
        <img src="/public/logo/6tm_title-001.svg" alt="" />
      </div>
      <div className="theme" onClick={handleThemeChange}>
        <ToggleButton />
      </div>
      <div className="links">
        <div className="link" onClick={() => handleClick('/')}>
          <a>HOME</a>
        </div>
        <div className="link" onClick={() => handleClick('/login')}>
          <a>LOGIN</a>
        </div>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  position: fixed;
  width: 100%;
  height: 8rem;
  background-color: ${theme.color_bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 7px 31px 19px -12px rgba(0, 0, 0, 0.5);
  z-index: 100;
  .links {
    color: white;
    width: 15%;
    display: flex;
    justify-content: space-around;
    a {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
    a:hover {
      color: #fff;
    }
    a::before {
      content: '';
      position: absolute;
      display: block;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #fff;
      transition: all 0.3s ease;
    }
    a:hover::before {
      width: 100%;
    }
  }
`;
