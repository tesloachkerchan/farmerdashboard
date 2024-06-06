import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import OrderDetailPage from '../../components/order/OrderDetailPage ';
import './orderPage.css'
import Footer from '../../components/footer/Footer';
function OrderDetail() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <OrderDetailPage />
      </div>
      <Footer />
    </>
  );
}

export default OrderDetail
