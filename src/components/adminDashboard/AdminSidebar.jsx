import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { AuthContext } from '../../context/AuthContext';
import './adminSidebar.css';

function AdminSidebar() {
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
          <Link to='/allproduct'>
            <li className="sidebarListItem">
            <InventoryIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Product</span>
          </li>
          </Link>
          <hr className='sidebarHr' />
          <Link to='/adminorder'>
            <li className="sidebarListItem">
            <ViewListIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Order</span>
          </li>
          </Link>
          <hr className='sidebarHr' />
          <Link to='/farmer'>
            <li className="sidebarListItem">
            <AgricultureIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Farmer</span>
          </li>
          </Link>
          <hr className='sidebarHr' />
          <Link to='/buyer'>
            <li className="sidebarListItem">
            <PeopleIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Buyer</span>
          </li>
          </Link>
          <hr className='sidebarHr' />
          <Link to='/company'>
            <li className="sidebarListItem">
            <LocalShippingIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Company</span>
          </li>
          </Link>
          <hr className='sidebarHr' />
          <Link to='/addblog'>
            <li className="sidebarListItem">
            <AddIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Blog</span>
          </li>
          </Link>
          <hr className='sidebarHr' />
        </ul>
      </div>
    </div>
  );
}

export default AdminSidebar;
