import React from 'react';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginPage } from 'src/pages/LoginPage';

const App = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/urs/cmn/ath/lgn/CmnAthLgn001M01.do" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;