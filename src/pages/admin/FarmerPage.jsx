import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Farmer from '../../components/adminDashboard/Farmer';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import './adminHomePage.css'
import Footer from '../../components/footer/Footer';
function FarmerPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <Farmer />
      </div>
      <Footer />
    </>
  );
}

export default FarmerPage
