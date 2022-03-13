import React from 'react';
import './style/style.css';
import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

import { useEffect, useRef } from "react";
import {TweenMax, Power3} from 'gsap'

import News from './components/news'
import Stateble from './components/stateble'
import Main from './components/mainPage';

function App() {
  return (
    <Router>
      <Link to="/" className='href' >
        <div className="logo"></div>
      </Link>
      <div className="body_container">
        {Stateble}
        <Routes>
          <Route path="/news" element={News}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={Main}></Route>
        </Routes>
      </div>
      <div className="designed">
        <p className="designed_t">2022 © Виктори Групп</p>
      </div>
    </Router>
  );
}

export default App;
