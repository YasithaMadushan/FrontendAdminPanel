import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Products from './Component/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/products' element={<Products/>} />
  </Routes>
  </BrowserRouter>
);
