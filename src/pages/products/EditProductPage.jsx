import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './productpage.css'
import EditProductForm from '../../components/product/EditProduct';
function EditProductPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <EditProductForm />
      </div>
    </>
  );
}

export default EditProductPage

