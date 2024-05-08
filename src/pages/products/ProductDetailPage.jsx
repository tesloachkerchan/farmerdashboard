import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ProductDetail from '../../components/product/ProductDetail';
import './productpage.css'
function ProductDetailPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <ProductDetail />
      </div>
    </>
  );
}

export default ProductDetailPage

