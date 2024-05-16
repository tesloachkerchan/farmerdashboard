import React,{useState,useEffect} from 'react';
import InventoryIcon from '@mui/icons-material/Inventory';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BasicArea from './LineChart';
import BasicPie from './PieChart';
import axios from 'axios';
import './home.css';



function Home() {
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [earned, setEarned] = useState(0);
  useEffect(() => {
    fetchProducts();
    fetchOrders();
    fetchEarned();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/products`);
      const products = response.data;
      const productCount = products.length;
      setTotalProduct(productCount);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/order/total`);
      const orders = response.data;
      const orderCount = orders.length;
      setTotalOrder(orderCount);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchEarned = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/order/earnings`);
      const earnedAmount = response.data;
      setEarned(earnedAmount);
    } catch (error) {
      console.error('Error fetching earnings:', error);
    }
  };
  return (
    <div className='main'>
      <div className='admin'>
        <div className='header'>
        <h1>Admin Dashboard</h1>
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
          <div className='piechart'>
          <BasicPie/>
        </div>
        <div className='liechart'>
          <BasicArea />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
