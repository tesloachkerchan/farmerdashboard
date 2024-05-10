import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './companySideBar.css';

function Sidebar() {
  const { user } = useContext(AuthContext)
  return (
    <div className='sidebar'>
      <div className="sidebarAvatar">
          <img src='https://i.ibb.co/4pDNDk1/avatar.png' alt="Avatar" className="avatarImage" />
        <h3>{user.name}</h3>
      </div>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to='/'>
          <li className="sidebarListItem">
              <HomeIcon className='sidebarIcon'/>
              <span className="sidebarListItemText">Home</span>
          </li>
            </Link>
          <hr className='sidebarHr' />
          <Link to='/companyorder'>
            <li className="sidebarListItem">
            <ViewListIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Order</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
