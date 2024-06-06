import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './productpage.css'
import EditProductForm from '../../components/product/EditProduct';
import Footer from '../../components/footer/Footer';
function EditProductPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <EditProductForm />
      </div>
      <Footer/>
    </>
  );
}

export default EditProductPage

