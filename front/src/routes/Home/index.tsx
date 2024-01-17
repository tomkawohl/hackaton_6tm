/*
 * File: /src/Routes/Home/index.tsx
 * Created Date: Monday, January 15th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Tue Jan 16 2024
 * Modified By: liber4lis
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import { useState } from 'react';
import { Footer, HomeHeader, SearchBar, UserCards } from '@components/index';

import { default as data } from '@data/data.json';

const Home = () => {
  const [input, setInput] = useState<string>('');
  return (
    <>
      <HomeHeader />
      <SearchBar input={input} setInput={setInput} />
      <UserCards data={data} />
      <Footer />
    </>
  );
};

export default Home;
