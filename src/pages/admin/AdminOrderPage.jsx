import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import AdminOrder from '../../components/adminDashboard/AdminOrder';
import './adminHomePage.css'
import Footer from '../../components/footer/Footer';
function AdminOrderPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <AdminOrder />
      </div>
      <Footer />
    </>
  );
}

export default AdminOrderPage
