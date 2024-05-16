import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import './adminHomePage.css'
import BuyerProfile from '../../components/adminDashboard/BuyerProfile';
function BuyerProfilePage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <BuyerProfile />
      </div>
    </>
  );
}

export default BuyerProfilePage
