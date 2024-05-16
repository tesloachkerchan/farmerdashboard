import React from 'react'
import Home from '../../components/adminDashboard/Home'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import './adminHomePage.css'
function AdminHomePage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <Home />
      </div>
    </>
  );
}

export default AdminHomePage
