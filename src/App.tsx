import React from 'react';
import './App.scss';
import { About, Galery, Header, Main, Orders } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
