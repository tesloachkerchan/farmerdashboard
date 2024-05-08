import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ProductCenter from '../../components/product/ProductCenter';

function ProductPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <ProductCenter />
      </div>
    </>
  );
}

export default ProductPage
