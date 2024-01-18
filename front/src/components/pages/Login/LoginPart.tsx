import React, { useState } from 'react';
import styled from 'styled-components';
import { MdPermIdentity } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import InputText from '@components/UI/Button/InputText';
import SubmitButton from '@components/UI/Button/SubmitButton';

export default function LoginPart() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const loginData = {
      login: 'login',
      name: name,
      password: password,
    };
    console.log(JSON.stringify(loginData));
    try {
      const response = await fetch('localhost:8000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données", error);
    }
    setName('');
    setPassword('');
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<string>
  ) => {
    set(event.target.value);
  };
  return (
    <LoginPartStyled>
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
        <SubmitButton handleSubmit={handleSubmit} />
      </form>
    </LoginPartStyled>
  );
}

const LoginPartStyled = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  padding-top: 5%;
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10%;
  }
`;
