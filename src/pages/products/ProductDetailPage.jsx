import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ProductDetail from '../../components/product/ProductDetail';
import './productpage.css'
import Footer from '../../components/footer/Footer';
function ProductDetailPage() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <ProductDetail />
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailPage

