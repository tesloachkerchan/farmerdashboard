import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import FarmerProfile from '../../components/adminDashboard/FarmerProfile';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import './adminHomePage.css'
function FarmerProfilePage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <FarmerProfile />
      </div>
    </>
  );
}

export default FarmerProfilePage
