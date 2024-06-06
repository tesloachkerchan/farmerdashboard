import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/company/CompanySideBar';
import CompanyLandingPage from '../../components/company/CompanyLandingPage';
import './companyPage.css'
import Footer from './../../components/footer/Footer'
function LandingPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <CompanyLandingPage />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage
