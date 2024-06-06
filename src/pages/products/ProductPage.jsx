import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ProductCenter from '../../components/product/ProductCenter';
import Footer from '../../components/footer/Footer';

function ProductPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <ProductCenter />
      </div>
      <Footer />
    </>
  );
}

export default ProductPage
