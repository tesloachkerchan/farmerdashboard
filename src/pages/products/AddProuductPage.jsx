import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import AddProductForm from '../../components/product/AddProduct';
function AddProuductPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <AddProductForm />
      </div>
    </>
  );
}

export default AddProuductPage
