import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import ColumnGroupingTable from '../../components/adminDashboard/Product';
import './adminHomePage.css'
import Footer from '../../components/footer/Footer';
function AdminProduct() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <ColumnGroupingTable />
      </div>
      <Footer />
    </>
  );
}

export default AdminProduct
