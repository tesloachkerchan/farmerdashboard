import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import ColumnGroupingTable from '../../components/adminDashboard/Product';
import './adminHomePage.css'
function AdminProduct() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <ColumnGroupingTable />
      </div>
    </>
  );
}

export default AdminProduct
