/*
 * File: /src/Routes/Home/index.tsx
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
import {
  Curve,
  Footer,
  HomeHeader,
  ModalCard,
  SearchBar,
  UserCards,
} from '@components/index';

import { useSearch } from '@hooks/index';
import NavBar from '@components/UI/Nav/NavBar';

const Home = () => {
  const {
    filteredUsers,
    setSearch,
    search,
    isLoading,
    handleInputChange,
    suggestions,
    isSuggestionOpen,
    setIsSuggestionOpen,
    currentUser,
    setCurrentUser,
  } = useSearch();
  return (
    <>
      <ModalCard data={currentUser} setCurrentUser={setCurrentUser} />
      <NavBar />
      <HomeHeader />
      <SearchBar
        handleInputChange={handleInputChange}
        setInput={setSearch}
        input={search}
        isLoading={isLoading}
        suggestions={suggestions}
        isSuggestionOpen={isSuggestionOpen}
        setIsSuggestionOpen={setIsSuggestionOpen}
      />
      <UserCards data={filteredUsers} setCurrentUser={setCurrentUser} />
      <Footer />
    </>
  );
};

export default Home;
