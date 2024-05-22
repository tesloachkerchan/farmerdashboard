import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar'
import Company from '../../components/viewCompanyByFarmer/Company';
import './companypage.css'
function CompanyPageFarmer() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <Company />
      </div>
    </>
  );
}

export default CompanyPageFarmer
