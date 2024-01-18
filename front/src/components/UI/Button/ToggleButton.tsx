import React from 'react';
import styled from 'styled-components';
import { FaSun } from 'react-icons/fa6';
import { IoMoon } from 'react-icons/io5';

export default function ToggleButton() {
  return (
    <ToggleButtonStyled>
      <div className="container">
        <label className="toggle" htmlFor="switch">
          <input id="switch" className="input" type="checkbox" />
          <div className="icon icon--moon">
            <IoMoon />
          </div>
          <div className="icon icon--sun">
            <FaSun />
          </div>
        </label>
      </div>
    </ToggleButtonStyled>
  );
}

const ToggleButtonStyled = styled.div`
  .toggle {
    background-color: #fff;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.1);
    line-height: 1;
  }

  .input {
    display: none;
  }

  .icon {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    transition: transform 500ms;
  }

  .icon--moon {
    transition-delay: 200ms;
  }

  .icon--sun {
    transform: scale(0);
  }

  #switch:checked + .icon--moon {
    transform: rotate(360deg) scale(0);
  }

  #switch:checked ~ .icon--sun {
    transition-delay: 200ms;
    transform: scale(1) rotate(360deg);
  }
`;
