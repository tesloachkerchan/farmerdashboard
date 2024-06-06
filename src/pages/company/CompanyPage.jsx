import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import CompanySideBar from '../../components/company/CompanySideBar';
import Company from '../../components/company/Company';
import Footer from '../../components/footer/Footer';
function CompanyPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <CompanySideBar />
        <Company />
      </div>
      <Footer />
    </>
  );
}


export default CompanyPage
