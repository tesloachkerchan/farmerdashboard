import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/company/CompanySideBar';
import CompanyLandingPage from '../../components/company/CompanyLandingPage';
import './companyPage.css'
function LandingPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <CompanyLandingPage />
      </div>
    </>
  );
}

export default LandingPage
