import '../sidebar/sidebar.css';
import { useState } from 'react';
import logo from '../../assets/logo.png'
import {useNavigate } from "react-router-dom";

import { CiLogout, CiUser, CiMonitor, CiHome, CiMenuBurger  } from "react-icons/ci";



const Sidebar = ({ closeSidebar }) => {

    const navigate = useNavigate();

    function Criar() {
        navigate("/Login");
      }

    const [sidebarOpen, setSidebarOpen] = useState(true);
    return(
        <div className={sidebarOpen ? "sidebar__open" : "sidebar__closed"} id="sidebar">
            <div className='sidebar__title'> 
                <div className='sidebar__icon'>
                <CiMenuBurger size={25} className='menuIcon'/>
                <h1>DASHBOARD</h1>  
                </div>
            </div>
            <div className='sidebar__Menu'>
                <div className='sidebar__link'>
                    <i className="Home"></i>
                    <a href='/Home'>
                        <CiHome 
                        size={20}
                        style={{
                        marginRight: 4,
                        marginBottom: -3,
                        }}/>Home</a>
                </div>
                <div className='sidebar__link'>
                    <i className="User" aria-hidden="true"></i>
                    <a href='#'>
                        <CiUser 
                        size={20}
                        style={{
                        marginRight: 4,
                        marginBottom: -3,
                        }}/>Usuário</a>
                </div>
                <div className='sidebar__link'>
                    <i className="Register"></i>
                    <a href='#'>
                        <CiMonitor 
                        size={20}
                        style={{
                        marginRight: 4,
                        marginBottom: -3,
                        }}/>Registradores</a>
                </div>
                <div className='sidebar__Logout'>
                    <i className='Logout'></i>
                    <a href='/'>
                        <CiLogout 
                        size={20}
                        style={{
                        marginRight: 4,
                        marginBottom: -3,
                        onClick:{Criar}
                        }}/>Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;