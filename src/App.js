import { useState } from 'react';
import Sidebar from './componentes/sidebar/sidebar'
import {CiMenuBurger} from "react-icons/ci";
import BarChart from './componentes/chart/chart';
import { userData } from './componentes/chart/dados';
import {Chart as ChartJS} from "chart.js/auto"
import Login from './componentes/login/login';


import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateAcc from './componentes/signUp/createAcc.JS';
import Home from './componentes/main/home/home';
import User from './componentes/main/user/user'
import Register from './componentes/main/register/register'

const App = () => {

  return (
    <>
    <div className='container'>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/SignUp' element={<CreateAcc/>}/>
      <Route path='/User' element={<User/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
