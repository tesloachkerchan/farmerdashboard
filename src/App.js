import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import ProductPage from './pages/products/ProductPage';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import OrderPage from './pages/orders/OrderPage';
import ProductDetailPage from './pages/products/ProductDetailPage';
import AddProuductPage from './pages/products/AddProuductPage';
import OrderDetail from './pages/orders/OrderDetail';
import EditProductPage from './pages/products/EditProductPage';

function App() {
  const {user} = useContext(AuthContext)
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productlist" element={user && user.role === 'farmer' ? <ProductPage /> : <Login />} />
        <Route path="/productlist/detail/:id" element={user && user.role === 'farmer' ? <ProductDetailPage /> : <Login />} />
        <Route path="/order/:id" element={user && user.role === 'farmer' ? <OrderDetail /> : <Login />} />
        <Route path="/order" element={user && user.role === 'farmer' ? <OrderPage /> : <Login />} />
        <Route path="/addproduct" element={user && user.role === 'farmer' ? <AddProuductPage /> : <Login />} />
        <Route path="/product/edit/:id" element={user && user.role === 'farmer' ? <EditProductPage /> : <Login />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
