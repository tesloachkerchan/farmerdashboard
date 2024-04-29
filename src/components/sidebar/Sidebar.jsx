import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarAvatar">
          <h1>Farmer</h1>
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
          <Link to='productlist'>
            <li className="sidebarListItem">
            <InventoryIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Product</span>
          </li>
          </Link>
          <hr className='sidebarHr' />
          <Link to='addproduct'>
            <li className="sidebarListItem">
            <AddShoppingCartIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Add Product</span>
          </li>
          </Link>
          <hr className='sidebarHr' />
          <Link to='order'>
            <li className="sidebarListItem">
            <ViewListIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Order</span>
          </li>
          </Link>
          <hr className='sidebarHr' />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
