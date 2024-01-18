import styled from 'styled-components';
import { default as theme } from '../components/theme/theme';
import NavBar from '@components/UI/Nav/NavBar';
import LeftPart from '../components/pages/Login/LeftPart';
import RightPart from '../components/pages/Login/RightPart';

export default function LoginPage() {
  return (
    <>
      <NavBar />
      <LoginPageStyled>
        <div className="content">
          <div className="login-part">
            <LeftPart />
            <RightPart />
          </div>
        </div>
      </LoginPageStyled>
    </>
  );
}

const LoginPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.color_bg};

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 6rem;

    .login-part {
      width: min(100% - 2rem, 70%);
      height: 65rem;
      display: flex;
      box-shadow: 0px 0px 74px 37px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      overflow: hidden;
    }
  }
`;
