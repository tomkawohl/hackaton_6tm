/*
 * File: /src/components/UI/Button/SubmitButton.tsx
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

import React from 'react';

import styled from 'styled-components';

export default function SubmitButton({
  handleSubmit,
}: {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <SubmitButtonStyled formAction="submit" onClick={handleSubmit}>
      <a href="#" className="btn2">
        <span className="spn2">SUBMIT</span>
      </a>
    </SubmitButtonStyled>
  );
}

const SubmitButtonStyled = styled.button`
  .btn2 {
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border: 2px solid #fefefe;
    text-transform: uppercase;
    color: #fefefe;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    transition: 0.3s;
  }

  .btn2::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - -2px);
    background-color: #212121;
    transition: 0.3s ease-out;
    transform: scaleY(1);
  }

  .btn2::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 50px);
    background-color: #212121;
    transition: 0.3s ease-out;
    transform: scaleY(1);
  }

  .btn2:hover::before {
    transform: translateY(-25px);
    height: 0;
  }

  .btn2:hover::after {
    transform: scaleX(0);
    transition-delay: 0.15s;
  }

  .btn2:hover {
    border: 2px solid #fefefe;
  }

  .btn2 span {
    position: relative;
    z-index: 3;
  }

  text-decoration: none;
  border: none;
  background-color: transparent;
`;
