import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import './adminHomePage.css'
import BuyerProfile from '../../components/adminDashboard/BuyerProfile';
import Footer from '../../components/footer/Footer';
function BuyerProfilePage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <BuyerProfile />
      </div>
      <Footer />
    </>
  );
}

export default BuyerProfilePage
