import React from 'react'
import Home from '../../components/adminDashboard/Home'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import './adminHomePage.css'
import Footer from '../../components/footer/Footer';
function AdminHomePage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default AdminHomePage
