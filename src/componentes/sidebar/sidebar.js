import '../sidebar/sidebar.css';
import { useState } from 'react';
import {useNavigate } from "react-router-dom";

import { TfiBarChart, TfiUser, TfiWindow, TfiPowerOff, TfiAlignJustify } from "react-icons/tfi";



const Sidebar = () => {

    const navigate = useNavigate();

    function Criar() {
        navigate("/Login");
      }

    const [sidebarOpen, setSidebarOpen] = useState(true);
    return(
        <div className={sidebarOpen ? "sidebar__open" : "sidebar__closed"} id="sidebar">
            <div className='sidebar__title'> 
                <div className='sidebar__icon'>
                <TfiAlignJustify size={20} className='menuIcon'/>
                <h1>DASHBOARD</h1>  
                </div>
            </div>
            <div className='sidebar__Menu'>
                <div className='sidebar__link'>
                    <i className="Home"></i>
                    <a href='/Home'>
                        <TfiBarChart 
                        size={20}
                        style={{
                        marginRight: 7,
                        marginBottom: -1,
                        }}/>Home</a>
                </div>
                <div className='sidebar__link'>
                    <i className="User" aria-hidden="true"></i>
                    <a href='/User'>
                        <TfiUser 
                        size={20}
                        style={{
                        marginRight: 7,
                        marginBottom: -1,
                        }}/>Usuário</a>
                </div>
                <div className='sidebar__link'>
                    <i className="Register"></i>
                    <a href='/Register'>
                        <TfiWindow 
                        size={20}
                        style={{
                        marginRight: 7,
                        marginBottom: -3,
                        }}/>Registradores</a>
                </div>
                <div className='sidebar__Logout'>
                    <i className='Logout'></i>
                    <a href='/'>
                        <TfiPowerOff 
                        size={19}
                        style={{
                        marginRight: 7,
                        marginBottom: -2,
                        onClick:{Criar}
                        }}/>Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;