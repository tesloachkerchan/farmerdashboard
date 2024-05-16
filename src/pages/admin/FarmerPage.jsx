import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Farmer from '../../components/adminDashboard/Farmer';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import './adminHomePage.css'
function FarmerPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <Farmer />
      </div>
    </>
  );
}

export default FarmerPage
