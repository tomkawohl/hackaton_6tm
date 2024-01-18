/*
 * File: /src/Routes/Home/index.tsx
 * Created Date: Monday, January 15th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Wed Jan 17 2024
 * Modified By: Nathan Coquelin
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import { Footer, HomeHeader, SearchBar, UserCards } from '@components/index';

import { useSearch } from '@hooks/index';

const Home = () => {
  const {
    filteredUsers,
    setSearch,
    search,
    isLoading,
    handleInputChange,
    suggestions,
  } = useSearch();
  return (
    <>
      <HomeHeader />
      <SearchBar
        handleInputChange={handleInputChange}
        setInput={setSearch}
        input={search}
        isLoading={isLoading}
        suggestions={suggestions}
      />
      <UserCards data={filteredUsers} />
      <Footer />
    </>
  );
};

export default Home;
