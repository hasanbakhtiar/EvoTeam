import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import './style.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
  <>
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
        </Routes>
    </BrowserRouter>
  </>
  </React.StrictMode>
);
