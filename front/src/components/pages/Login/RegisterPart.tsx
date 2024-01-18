import React, { useState } from 'react';
import styled from 'styled-components';
import { MdPermIdentity } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import InputText from '@components/UI/Button/InputText';
import SubmitButton from '@components/UI/Button/SubmitButton';

export default function RegisterPart() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setName('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<string>
  ) => {
    set(event.target.value);
  };
  return (
    <RegisterPartStyled>
      <form action="submit">
        <InputText
          icon={<MdPermIdentity className="icon" />}
          handleChange={handleChange}
          setter={setName}
          placeholder={'Name'}
          type={'text'}
          value={name}
        />
        <InputText
          icon={<RiLockPasswordFill className="icon" />}
          handleChange={handleChange}
          setter={setPassword}
          placeholder={'Password'}
          type={'password'}
          value={password}
        />
        <InputText
          icon={<RiLockPasswordFill className="icon" />}
          handleChange={handleChange}
          setter={setConfirmPassword}
          placeholder={'Confirm Password'}
          type={'password'}
          value={confirmPassword}
        />
        <SubmitButton handleSubmit={handleSubmit} />
      </form>
    </RegisterPartStyled>
  );
}

const RegisterPartStyled = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10%;
  }
`;
