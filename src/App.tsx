import React from 'react';
import './App.scss';
import { About, Galery, Header, Main, Orders, References } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  return (
    <Router>
      <div className='root-component'>
        <Header />
        <div className='root-component-content'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/gallery' element={<Galery />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/references' element={<References />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
