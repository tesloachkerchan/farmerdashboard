import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import OrderTable from '../../components/order/OrderTable';
import './orderPage.css'
function OrderPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <OrderTable />
      </div>
    </>
  );
}

export default OrderPage
