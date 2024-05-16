import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import ProductDetail from '../../components/adminDashboard/ProductDetail';
import './adminHomePage.css'
function AdminProductDetail() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <ProductDetail />
      </div>
    </>
  );
}

export default AdminProductDetail
