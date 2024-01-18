/*
 * File: /src/App.tsx
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

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, LoginPage } from '@routes/index';

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/intra" element={<Intra />} errorElement={<IntraError />} */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
