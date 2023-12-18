import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Bottom from './components/Bottom';

import Home     from './pages/Home';
import More     from './pages/More';
import DangNhap from './pages/DangNhap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/moviedbdemo' element={<Header/>}>
          
          <Route index element={<Home />}/>
          <Route path="login" element={<DangNhap/>}/>
          <Route path="more" element={<More />}/>

        </Route>
      </Routes>
      <Bottom />
    </BrowserRouter>
  )
}

export default App;
