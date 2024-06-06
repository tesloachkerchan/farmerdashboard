import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import AddProductForm from '../../components/product/AddProduct';
import Footer from '../../components/footer/Footer';
function AddProuductPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <AddProductForm />
      </div>
      <Footer />
    </>
  );
}

export default AddProuductPage
