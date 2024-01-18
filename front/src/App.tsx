/*
 * File: /src/App.tsx
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
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, LoginPage } from '@routes/index';
import { ThemeProvider } from './context';
import { Curve } from './components';

function App() {
  return (
    <>
      <Curve backgroundColor={'#1f1f1f'} />
      <div className="container">
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="/intra" element={<Intra />} errorElement={<IntraError />} */}
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
