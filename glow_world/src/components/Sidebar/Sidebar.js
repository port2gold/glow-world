import React from 'react'
import './Sidebar.css';
import {SidebarData} from './SidebarData'
import {useState} from 'react'
import {  Link } from 'react-router-dom';
import {react-icons} from 'react-icons'


function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  {/* <AiIcons.AiOutlineClose /> */}
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
      </>
    );
  }
  
  export default Sidebar;
