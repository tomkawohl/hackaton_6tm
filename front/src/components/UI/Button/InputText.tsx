/*
 * File: /src/components/UI/Button/InputText.tsx
 * Created Date: Wednesday, January 17th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Thu Jan 18 2024
 * Modified By: liber4lis
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import React from 'react';

import theme from '@components/theme/theme';
import styled from 'styled-components';

export default function InputText({
  icon,
  handleChange,
  setter,
  placeholder,
  type,
  value,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<string>
  ) => void;
  setter: React.Dispatch<string>;
  placeholder: string;
  type: string;
  value: string;
}) {
  return (
    <InputTextStyled className="group">
      <div className="input-icons">
        {icon}
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          onChange={(event) => handleChange(event, setter)}
          value={value}
        />
      </div>
    </InputTextStyled>
  );
}

const InputTextStyled = styled.div`
  .group {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    line-height: 30px;
    position: relative;
    max-width: 100%;
  }

  .input {
    width: 100%;
    height: 45px;
    line-height: 30px;
    padding: 0 5rem;
    padding-left: 3rem;
    border: 2px solid transparent;
    border-radius: 10px;
    outline: none;
    background-color: #f8fafc;
    color: #0d0c22;
    transition: 0.5s ease;
  }

  .input::placeholder {
    color: #94a3b8;
  }

  .input:focus,
  input:hover {
    outline: none;
    border-color: ${theme.color_primary};
    background-color: #fff;
    box-shadow: 0 0 0 5px ${theme.color_primary_rgba};
  }
  .input-icons {
    position: relative;
    display: flex;
    align-items: center;
  }

  .icon {
    position: absolute;
    left: 10px;
    color: #94a3b8;
    top: 50%;
    transform: translateY(-50%);
  }
`;
