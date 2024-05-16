import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import Company from '../../components/adminDashboard/Company';
import './adminHomePage.css'
function AdminCompanyPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <Company />
      </div>
    </>
  );
}

export default AdminCompanyPage
