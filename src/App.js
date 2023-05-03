import { useState } from 'react';


import Sidebar from './componentes/sidebar/sidebar'
import Navbar from './componentes/navbar/navbar';
import {CiMenuBurger} from "react-icons/ci";


import './App.css';

const App = () => {
  return (
    <div className="container">
      <Sidebar/>
    </div>  
  );
}

export default App;
