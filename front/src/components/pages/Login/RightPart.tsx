import { useState } from 'react';
import theme from '@components/theme/theme';
import styled from 'styled-components';
import RegisterPart from './RegisterPart';
import LoginPart from './LoginPart';
import '../../../sass/main.scss';

export default function RightPart() {
  const [islogin, setislogin] = useState<boolean>(true);

  const handleClick = (bool: boolean) => {
    setislogin(bool);
  };

  return (
    <RightPartStyled $islogin={islogin.toString()}>
      <div className="form">
        <h1>Hello, Guys !</h1>
        <div className="part">
          <div className="menu">
            <div className="login" onClick={() => handleClick(true)}>
              <a href="https://google.com">Login</a>
            </div>
            <div className="register" onClick={() => handleClick(false)}>
              <p>Register</p>
            </div>
          </div>
          {islogin ? <LoginPart /> : <RegisterPart />}
        </div>
      </div>
    </RightPartStyled>
  );
}

const RightPartStyled = styled.div`
  height: 100%;
  width: 80%;
  max-width: 90rem;
  background-color: ${theme.color_bg};
  display: flex;
  align-items: center;
  .form {
    height: 90%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color: #fff;
      font-family: ${theme.title_font};
      font-size: 3.6rem;
    }
    .part {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 13%;
      gap: 10%;

      .menu {
        display: flex;
        color: #fff;
        gap: 15%;
        font-size: 3rem;
        display: flex;
        justify-content: center;
        .login,
        .register {
          cursor: pointer;
        }
        .login p {
          text-decoration: ${(props) =>
            props.$islogin === 'true' ? 'underline' : null};
          opacity: ${(props) => (props.$islogin === 'true' ? 1 : 0.5)};
        }

        .register p {
          text-decoration: ${(props) =>
            props.$islogin === 'true' ? null : 'underline'};
          opacity: ${(props) => (props.$islogin === 'true' ? 0.5 : 1)};
        }
      }
    }
  }
`;
