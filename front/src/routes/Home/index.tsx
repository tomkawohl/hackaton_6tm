/*
 * File: /src/Routes/Home/index.tsx
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

import { useState } from 'react';
import { Footer, HomeHeader, SearchBar } from '@components/index';

const Home = () => {
  const [input, setInput] = useState<string>('');
  return (
    <>
      <HomeHeader />
      <SearchBar input={input} setInput={setInput} />
      {/* <UserCards /> */}
      <Footer />
    </>
  );
};

export default Home;
