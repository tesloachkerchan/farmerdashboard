import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import Company from '../../components/adminDashboard/Company';
import './adminHomePage.css'
import Footer from '../../components/footer/Footer';
function AdminCompanyPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <Company />
      </div>
      <Footer />
    </>
  );
}

export default AdminCompanyPage
