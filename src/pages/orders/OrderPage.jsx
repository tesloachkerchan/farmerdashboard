import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import OrderTable from '../../components/order/OrderTable';
import './orderPage.css'
import Footer from '../../components/footer/Footer';
function OrderPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <OrderTable />
      </div>
      <Footer />
    </>
  );
}

export default OrderPage
