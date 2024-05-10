import React from 'react'
import InventoryIcon from '@mui/icons-material/Inventory';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './landingPage.css'
import RecentOrder from './CompanyRecentOrder';

function CompanyLandingPage() {

  
  return (
      <div className='center'>
          <div className='admin'>
      <div className='header'>
        <h1>Transportation Company Dashboard</h1>
      </div>
      <hr className='sidebarHr' />
       <div className="box-info">
          <li>
            <i className="fas fa-calendar-check"><InventoryIcon/></i>
            <span className="text">
              <h3>11</h3>
              <p>Products</p>
            </span>
          </li>
          <li>
            <i className="fas fa-people-group"><ViewListIcon /></i>
            <span className="text">
              <h3>11M</h3>
              <p>Earning</p>
            </span>
          </li>
          <li>
            <i className="fas fa-dollar-sign"><AddShoppingCartIcon/></i>
            <span className="text">
              <h3>11</h3>
              <p>Orders</p>
            </span>
          </li>
        </div>
      <div className='center'>
        <div className='recentorder'>
          <RecentOrder />
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default CompanyLandingPage
