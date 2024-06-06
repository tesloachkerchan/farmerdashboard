import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar'
import Company from '../../components/viewCompanyByFarmer/Company';
import './companypage.css'
import Footer from '../../components/footer/Footer';
function CompanyPageFarmer() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <Company />
      </div>
      <Footer />
    </>
  );
}

export default CompanyPageFarmer
