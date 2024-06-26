import React from 'react';
import './center.css';
import { useContext } from 'react';
import {Routes, Route } from 'react-router-dom';
import ColumnGroupingTable from '../product/ColumnGroupingTable'; // Assuming ColumnGroupingTable is in the same directory
import AdminHome from '../adminHome/AdminHome';
import OrderTable from '../order/OrderTable';
import OrderDetailPage from '../order/OrderDetailPage ';
import AddProductForm from '../product/AddProduct';
import ProductDetailPage from '../product/ProductDetail';
import EditProductForm from '../product/EditProduct';
import Login from '../../pages/login/Login'
import { AuthContext } from '../../context/AuthContext';
function Center() {
  const {user} = useContext(AuthContext)
  return (
    <div className='center'>
          <AdminHome />
    </div>
  );
}

export default Center;
