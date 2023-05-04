import { useState } from 'react';
import Sidebar from './componentes/sidebar/sidebar'
import Navbar from './componentes/navbar/navbar';
import {CiMenuBurger} from "react-icons/ci";
import BarChart from './componentes/chart/chart';
import { userData } from './componentes/chart/dados';
import {Chart as ChartJS} from "chart.js/auto"
import Login from './componentes/login/login';


import './App.css';

const App = () => {

  return (
    <>
    <div className="container">
      <Login/>
    </div>
    </>  
  );
}

export default App;
