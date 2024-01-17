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
import { useSearchLoading } from '@hooks/index';

type Props = {
  input: string;
  setInput: React.Dispatch<string>;
};

const SearchBar = ({ input, setInput }: Props) => {
  const { isLoading, handleInputChange, inputValue, setInputValue } =
    useSearchLoading({
      initialValue: 'empty',
    });

  return (
    <div className="search-bar__container">
      <div className={`search-bar`}>
        <IoSearch className="search-bar__icon-left" />
        <input
          className={`search-bar__text-input`}
          onChange={handleInputChange}
          type="text"
          value={inputValue}
        />
        {inputValue.length != 0 && (
          <IoIosCloseCircleOutline
            className="search-bar__delete"
            onClick={() => {
              setInputValue('');
            }}
          />
        )}
      </div>
      {inputValue.length !== 0 ? (
        <div className={`search-bar__loader ${isLoading}`} />
      ) : (
        <div className="search-bar__loader"></div>
      )}
    </div>
  );
};

export default SearchBar;
