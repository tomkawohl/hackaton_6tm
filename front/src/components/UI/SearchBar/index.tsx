/*
 * File: /src/components/UI/SearchBar/index.tsx
 * Created Date: Monday, January 15th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Thu Jan 18 2024
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
import SearchSuggestionItem from './SearchSuggestionItem';

interface Props {
  input: string;
  setInput: React.Dispatch<string>;
  isLoading: 'empty' | 'loading' | 'loaded' | 'writting';
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: { type: string; suggestion: string; distance: number }[];
  isSuggestionOpen: boolean;
  setIsSuggestionOpen: React.Dispatch<boolean>;
}

const SearchBar = ({
  input,
  setInput,
  isLoading,
  handleInputChange,
  suggestions,
  isSuggestionOpen,
  setIsSuggestionOpen,
}: Props) => {
  return (
    <div className="search">
      <div className="search-bar__container">
        <div className={`search-bar`}>
          <IoSearch className="search-bar__icon-left" />
          <input
            className={`search-bar__text-input`}
            onChange={handleInputChange}
            type="text"
            value={input}
          />
          {input.length !== 0 && (
            <IoIosCloseCircleOutline
              className="search-bar__delete"
              onClick={() => {
                setInput('');
                setIsSuggestionOpen(false);
              }}
            />
          )}
        </div>
        {input.length !== 0 ? (
          <div className={`search-bar__loader ${isLoading}`} />
        ) : (
          <div className="search-bar__loader"></div>
        )}
      </div>
      {isSuggestionOpen && (
        <div className="search__suggestions">
          {suggestions.map((item) => (
            <SearchSuggestionItem
              key={Math.random()}
              data={item}
              setInput={setInput}
              setIsSuggestionOpen={setIsSuggestionOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
