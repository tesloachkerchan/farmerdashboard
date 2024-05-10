import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import CompanySideBar from '../../components/company/CompanySideBar';
import Company from '../../components/company/Company';
function CompanyPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <CompanySideBar />
        <Company />
      </div>
    </>
  );
}


export default CompanyPage
