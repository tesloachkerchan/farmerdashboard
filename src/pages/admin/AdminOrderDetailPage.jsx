import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import AdminSidebar from '../../components/adminDashboard/AdminSidebar';
import AdminOrderDetail from '../../components/adminDashboard/AdminOrderDetail';
function AdminOrderDetailPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <AdminSidebar />
        <AdminOrderDetail />
      </div>
    </>
  );
}

export default AdminOrderDetailPage
