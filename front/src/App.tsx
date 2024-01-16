/*
 * File: /src/App.tsx
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

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '@routes/index';
import { Footer } from '@components/index';

function App() {
  return (
    <>
      <div className="container">
        {/* <Nav /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/intra" element={<Intra />} errorElement={<IntraError />} */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;