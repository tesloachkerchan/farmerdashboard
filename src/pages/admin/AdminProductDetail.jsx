import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import ProductDetail from '../../components/adminDashboard/ProductDetail';
import './adminHomePage.css'
import Footer from '../../components/footer/Footer';
function AdminProductDetail() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <ProductDetail />
      </div>
      <Footer />
    </>
  );
}

export default AdminProductDetail
