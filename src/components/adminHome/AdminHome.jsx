import React from 'react'
import InventoryIcon from '@mui/icons-material/Inventory';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BarChart from '../chart/BarChart'
import './adminhome.css'
import RecentOrder from '../order/RecentOrder';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function AdminHome() {
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [earned, setEarned] = useState(0);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/products/${user._id}`);
      const products = response.data;
      const productCount = products.length;
      setTotalProduct(productCount);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/order/total/farmer/${user._id}`);
      const orders = response.data;
      console.log(orders)
      const OrderCount =orders.length

      setTotalOrder(OrderCount);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  useEffect(() => {
    fetchEarned();
  }, []);

  const fetchEarned = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/order/earnings/farmer/${user._id}`);
      const earned = response.data;
      setEarned(earned);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
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
              <h3>{totalProduct}</h3>
              <p>Products</p>
            </span>
          </li>
          <li>
            <i className="fas fa-people-group"><ViewListIcon /></i>
            <span className="text">
              <h3>{earned}M</h3>
              <p>Earning</p>
            </span>
          </li>
          <li>
            <i className="fas fa-dollar-sign"><AddShoppingCartIcon/></i>
            <span className="text">
              <h3>{totalOrder}</h3>
              <p>Orders</p>
            </span>
          </li>
        </div>
      <div className='center'>
        <div className='chart'>
        <BarChart />
        </div>
        <div className='recentorder'>
          <RecentOrder />
        </div>
        
      </div>
    </div>
  )
}

export default AdminHome
