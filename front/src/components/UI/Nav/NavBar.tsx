/*
 * File: /src/components/UI/Nav/NavBar.tsx
 * Created Date: Wednesday, January 17th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Thu Jan 18 2024
 * Modified By: Nathan Coquelin
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';
import { default as theme } from '../../theme/theme';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '../Button/ToggleButton';
import { useTheme } from '@context/ThemeProvider';

export default function NavBar() {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  const { toggleTheme } = useTheme();

  return (
    <NavBarStyled>
      <div className="logo">
        <img src="/logo/6tm_title-001.svg" alt="" className="logo__img-1" />
        <img src="/logo/6tm_title-002.png" alt="" className="logo__img-2" />
      </div>
      <div className="right">
        <div className="link" onClick={() => handleClick('/login')}>
          <p>HOME</p>
        </div>
        <a className="link" href="http://localhost:8000/login">
          <p>LOGIN</p>
        </a>

        <ToggleButton onClick={() => toggleTheme()} />
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  .logo {
    width: min(calc(100% - 8rem), 40rem);
    height: 100%;
    padding: 1rem 0;
    &__img-1 {
      height: 100%;
      display: block;
    }
    &__img-2 {
      height: 100%;
      display: none;
    }
    @media only screen and (max-width: 600px) {
      &__img-1 {
        height: 100%;
        display: none;
      }
      &__img-2 {
        height: 100%;
        display: block;
      }
    }
  }
  position: fixed;
  width: 100%;
  height: 8rem;
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
  box-shadow: 7px 20px 19px 10px rgba(0, 0, 0, 0.15);
  z-index: 100;
  .right {
    color: white;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    .link {
      text-decoration: none;
      color: white;
    }
    p {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
    p:hover {
      color: #fff;
    }
    p::before {
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
    p:hover::before {
      width: 100%;
    }
  }
`;
