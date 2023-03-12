import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Signin from './pages/auth/Signin';
import Home from './pages/home/Home';
import ForgetPassword from './pages/auth/ForgetPassword';
import Product from './layout/main/Product';
import Navbar from './layout/header/Navbar';


function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
