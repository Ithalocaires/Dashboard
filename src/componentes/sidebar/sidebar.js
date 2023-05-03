import '../sidebar/sidebar.css';
import { useState } from 'react';
import logo from '../../assets/logo.png'

import { CiLogout, CiUser, CiMonitor, CiHome } from "react-icons/ci";



const Sidebar = ({ closeSidebar }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return(
        <div className={sidebarOpen ? "sidebar__open" : "sidebar__closed"} id="sidebar">
            <div className='sidebar__title'> 
                <div className='sidebar__img'>
                <img src={logo} alt='logo' id="site_logo" onClick={() => setSidebarOpen(!sidebarOpen)}/>
                <h1>DASHBOARD</h1>
                </div>
            </div>
            <i 
            onClick={() => closeSidebar}
            className='fa fa-times'
            id='sidebar'
            area-hidden="true"
            ></i>
            <div className='sidebar__Menu'>
                <div className='sidebar__link'>
                    <i className="fa fa-home"></i>
                    <a href='#'>
                        <CiHome 
                        size={20}
                        style={{
                        marginRight: 4,
                        marginBottom: -3,
                        }}/>
                        Home</a>
                </div>
                <div className='sidebar__link'>
                    <i className="fa fa-building" aria-hidden="true"></i>
                    <a href='#'>
                        <CiUser 
                        size={20}
                        style={{
                        marginRight: 4,
                        marginBottom: -3,
                        }}/>
                        Usuário</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-male'></i>
                    <a href='#'>
                        <CiMonitor 
                        size={20}
                        style={{
                        marginRight: 4,
                        marginBottom: -3,
                        }}/>
                        Registradores</a>
                </div>
                <div className='sidebar__Logout'>
                    <i className='fa fa-power-off'></i>
                    <a href='#'>
                        <CiLogout 
                        size={20}
                        style={{
                        marginRight: 4,
                        marginBottom: -3,
                        }}/>Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;