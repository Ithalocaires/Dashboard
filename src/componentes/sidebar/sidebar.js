import '../sidebar/sidebar.css';

import logo from '../../assets/logo.png'



const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className='sidebar__title'>  
                <h1>DASHBOARD</h1>
            </div>
            <i 
            onClick={() => closeSidebar}
            className='fa fa-times'
            id='sidebar'
            area-hidden="true"
            ></i>
            <div className='sidebar__Menu'>
                <div className='sidebar__link'>
                    <i class="fa fa-home"></i>
                    <a href='#'>Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className='sidebar__link'>
                    <i class="fa fa-building" aria-hidden="true"></i>
                    <a href='#'>Area administrativa</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-male'></i>
                    <a href='#'>Usuário</a>
                </div>
                <div className='sidebar__Logout'>
                    <i className='fa fa-power-off'></i>
                    <a href='#'>Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;