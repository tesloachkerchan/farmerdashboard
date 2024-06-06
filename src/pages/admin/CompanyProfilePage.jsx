import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import './adminHomePage.css'
import CompanyProfile from '../../components/adminDashboard/CompanyProfile';
import Footer from '../../components/footer/Footer';
function CompanyProfilePage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <CompanyProfile />
      </div>
      <Footer />
    </>
  );
}

export default CompanyProfilePage
