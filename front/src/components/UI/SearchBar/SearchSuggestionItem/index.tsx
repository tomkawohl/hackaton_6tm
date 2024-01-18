/*
 * File: /src/components/UI/SearchBar/SearchSuggestionItem/index.tsx
 * Created Date: Wednesday, January 17th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Wed Jan 17 2024
 * Modified By: liber4lis
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdHomeWork } from 'react-icons/md';

import './styles.scss';

type Props = {
  data: { type: string; suggestion: string; distance: number };
  setInput: React.Dispatch<string>;
};

const SearchSuggestionItem = ({ data, setInput }: Props) => {
  let icon;
  if (data.type === 'agence')
    icon = <IoLocationSharp className="search__suggestions--item--icon" />;
  if (data.type === 'equipe')
    icon = <FaUsers className="search__suggestions--item--icon" />;
  if (data.type === 'nom' || data.type === 'prenom')
    icon = <CgProfile className="search__suggestions--item--icon" />;
  if (data.type === 'poste')
    icon = <MdHomeWork className="search__suggestions--item--icon" />;
  return (
    <div
      className="search__suggestions--item"
      onClick={() => setInput(data.suggestion)}
    >
      {icon}
      <p className="search__seggestions--item--text">{data.suggestion}</p>
    </div>
  );
};

export default SearchSuggestionItem;
