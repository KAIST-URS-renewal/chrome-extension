import React from 'react';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {LoginPage} from 'src/pages/LoginPage';
import {HomePage} from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/urs/cmn/ath/lgn/CmnAthLgn001M01.do"
          element={<LoginPage />}
        />
        <Route
          path="/urs/cmn/ath/lgn/CmnAthLgn001M02.do"
          element={<LoginPage />}
        />
        <Route
          path="/urs/cmn/ath/lgn/CmnAthLgn001M03.do"
          element={<LoginPage />}
        />
        <Route
          path="/urs/rsv/sch/cmn/RsvSchCmn001M01.do"
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
