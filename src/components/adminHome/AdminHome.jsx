import React, { useState, useEffect, useContext } from 'react';
import InventoryIcon from '@mui/icons-material/Inventory';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BarChart from '../chart/BarChart';
import RecentOrder from '../order/RecentOrder';
import axios from 'axios'; 
import {BASE_URL} from '../../utils/Config'
import './adminhome.css';
import { AuthContext } from '../../context/AuthContext';

function AdminHome() { 
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [earned, setEarned] = useState(0);
  const [orderCounts, setOrderCounts] = useState([0, 0, 0, 0]); // Initial counts

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchProducts();
    fetchOrders();
    fetchEarned();
    fetchOrderCounts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/products/${user._id}`);
      const products = response.data;
      const productCount = products.length;
      setTotalProduct(productCount);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/order/total/farmer/${user._id}`);
      const orders = response.data;
      const orderCount = orders.length;
      setTotalOrder(orderCount);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchEarned = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/order/earnings/farmer/${user._id}`);
      const earnedAmount = response.data;
      setEarned(earnedAmount);
    } catch (error) {
      console.error('Error fetching earnings:', error);
    }
  };

  const fetchOrderCounts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/order/farmer/${user._id}/order-counts`);
      const counts = response.data;
      const { pendingCount, shippingCount, deliveredCount, processingCount } = counts;
      setOrderCounts([pendingCount, shippingCount, deliveredCount, processingCount]);
    } catch (error) {
      console.error('Error fetching order counts:', error);
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
          <i className="fas fa-calendar-check"><InventoryIcon /></i>
          <span className="text">
            <h3>{totalProduct}</h3>
            <p>Products</p>
          </span>
        </li>
        <li>
          <i className="fas fa-people-group"><ViewListIcon /></i>
          <span className="text">
            <h3>{earned}</h3>
            <p>Earning</p>
          </span>
        </li>
        <li>
          <i className="fas fa-dollar-sign"><AddShoppingCartIcon /></i>
          <span className="text">
            <h3>{totalOrder}</h3>
            <p>Orders</p>
          </span>
        </li>
      </div>
      <div className='center'>
        <div className='chart'>
          <BarChart counts={orderCounts} />
        </div>
        <div className='recentorder'>
          <RecentOrder />
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
