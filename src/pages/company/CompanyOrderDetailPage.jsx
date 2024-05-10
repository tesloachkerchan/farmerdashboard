import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/company/CompanySideBar';
import OrderDetailPage from '../../components/company/CompanyOrderDetail';
import './companyPage.css'
function CompanyOrderDetailPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <OrderDetailPage />
      </div>
    </>
  );
}

export default CompanyOrderDetailPage
