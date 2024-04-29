import React from 'react'
import InventoryIcon from '@mui/icons-material/Inventory';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BarChart from '../chart/BarChart'
import './adminhome.css'

function AdminHome() {
  return (
    <div className='admin'>
      <div className='header'>
        <h1>Farmer Dashboard</h1>
      </div>
      <hr className='sidebarHr' />
       <div className="box-info">
          <li>
            <i className="fas fa-calendar-check"><InventoryIcon/></i>
            <span className="text">
              <h3>98</h3>
              <p>product</p>
            </span>
          </li>
          <li>
            <i className="fas fa-people-group"><ViewListIcon /></i>
            <span className="text">
              <h3>2M</h3>
              <p>Earning</p>
            </span>
          </li>
          <li>
            <i className="fas fa-dollar-sign"><AddShoppingCartIcon/></i>
            <span className="text">
              <h3>78</h3>
              <p>Orders</p>
            </span>
          </li>
        </div>
      <div className='chart'>
        <BarChart />
      </div>
    </div>
  )
}

export default AdminHome
