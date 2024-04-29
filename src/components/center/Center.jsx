import React from 'react';
import './center.css';
import {Routes, Route } from 'react-router-dom';
import ColumnGroupingTable from '../product/ColumnGroupingTable'; // Assuming ColumnGroupingTable is in the same directory
import AdminHome from '../adminHome/AdminHome';
import OrderTable from '../order/OrderTable';
import OrderDetailPage from '../order/OrderDetailPage ';

function Center() {
  return (
    <div className='center'>
          <Routes>
          <Route path="/" element={<AdminHome />} />
        <Route path="/productlist" element={<ColumnGroupingTable />} /> {/* Adjust path */}
        <Route path="/order" element={<OrderTable />} />
        <Route path="/order/:id" element={<OrderDetailPage />} />
        </Routes>
    </div>
  );
}

export default Center;
