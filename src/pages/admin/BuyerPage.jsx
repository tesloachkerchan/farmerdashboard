import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import './adminHomePage.css'
import Buyer from '../../components/adminDashboard/Buyer';
function BuyerPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <Buyer />
      </div>
    </>
  );
}

export default BuyerPage
