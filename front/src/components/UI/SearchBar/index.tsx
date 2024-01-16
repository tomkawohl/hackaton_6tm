/*
 * File: /src/components/UI/SearchBar/index.tsx
 * Created Date: Monday, January 15th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Mon Jan 15 2024
 * Modified By: Nathan Coquelin
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import React from 'react';
import './style.scss';
import { IoSearch } from 'react-icons/io5';
import { IoIosCloseCircleOutline } from 'react-icons/io';

type Props = {
  input: string;
  setInput: React.Dispatch<string>;
};

const SearchBar = ({ input, setInput }: Props) => {
  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="search-bar">
        <IoSearch className="search-bar__icon-left" />
        <input
          className="search-bar__text-input"
          onChange={updateInput}
          type="text"
          value={input}
        />
        {input.length != 0 && (
          <IoIosCloseCircleOutline
            className="search-bar__delete"
            onClick={() => setInput('')}
          />
        )}
      </div>
    </>
  );
};

export default SearchBar;
