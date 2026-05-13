'use client'

import { useState } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputComp from './components/InputComp'
import { STATES_LGA } from './utils/constants/states';
import SelectInputField from './components/Input/SelectInput';
import { CustomOTPInput } from './components/Input/OTPInput';
import HigherOrderComp from './components/Input/HigherOrderComp';
import {Route, Routes, BrowserRouter, Router, NavLink, useParams, useNavigate, Outlet, Link} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ProductDetails from './Pages/ProductDetails';
import DahboardLayout from './Pages/DahboardLayout';
import Home from './Pages/Home';
import Protection from './Pages/Protection';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login/>} />
      <Route path='sign-up' element={<Signup/>} />
      <Route path ='products/:name' element={<ProductDetails/>} />

      <Route path='dashboard' element={
        <Protection>
          <DahboardLayout/>
        </Protection>
      } >
        <Route path='home' element={<Home/>}  />
      </Route>
    </Routes>
    </BrowserRouter>
  )

}

export default App;
