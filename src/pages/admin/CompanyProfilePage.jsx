import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import './adminHomePage.css'
import CompanyProfile from '../../components/adminDashboard/CompanyProfile';
function CompanyProfilePage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <CompanyProfile />
      </div>
    </>
  );
}

export default CompanyProfilePage
