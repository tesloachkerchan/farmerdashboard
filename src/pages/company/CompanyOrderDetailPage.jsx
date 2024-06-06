import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/company/CompanySideBar';
import OrderDetailPage from '../../components/company/CompanyOrderDetail';
import './companyPage.css'
import Footer from '../../components/footer/Footer';
function CompanyOrderDetailPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <OrderDetailPage />
      </div>
      <Footer />
    </>
  );
}

export default CompanyOrderDetailPage
