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
import CompanyPage from './pages/company/CompanyPage';
import CompanyOrderDetailPage from './pages/company/CompanyOrderDetailPage';
import LandingPage from './pages/company/LandingPage';
import AdminHomePage from './pages/admin/AdminHomePage';
import AdminProduct from './pages/admin/AdminProduct';
import AdminProductDetail from './pages/admin/AdminProductDetail';
import AdminOrderPage from './pages/admin/AdminOrderPage';
import AdminOrderDetailPage from './pages/admin/AdminOrderDetailPage';
import FarmerPage from './pages/admin/FarmerPage';
import BuyerPage from './pages/admin/BuyerPage';
import AdminCompanyPage from './pages/admin/AdminCompanyPage';
import FarmerProfilePage from './pages/admin/FarmerProfilePage';
import BuyerProfilePage from './pages/admin/BuyerProfilePage';
import CompanyProfilePage from './pages/admin/CompanyProfilePage';
import CompanyPageFarmer from './pages/farmer/CompanyPageFarmer';
import Blog from './pages/blog/BlogPage';
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings';
import Register from './pages/register/Register'
import ProfilePage from './pages/profile/farmer/ProfilePage';
import ProfileEdit from './pages/profile/farmer/EditProfile';
import CompanyProfile from './pages/profile/company/CompanyProfile'
import CompanyEditProfile from './pages/profile/company/CompanyEditProfile';
import Contact from './pages/contact/Contact';

function App() {
  const {user} = useContext(AuthContext)
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route
  path="/"
  element={
    user ? (
      user.role === 'admin' ? (
        <AdminHomePage />
      ) : user.role === 'farmer' ? (
        <Home /> // or whatever page you want farmers to be directed to
      ) : (
        <LandingPage />
      )
    ) : (
      <Login />
    )
  }
/>

        <Route path="/login" element={<Login />} />
        <Route path="/productlist" element={user && user.role === 'farmer' ? <ProductPage /> : <Login />} />
        <Route path="/allproduct" element={user && user.role === 'admin' ? <AdminProduct /> : <Login />} />
        <Route path="/productlist/detail/:id" element={user && user.role === 'farmer' ? <ProductDetailPage /> : <Login />} />
        <Route path="/Adminproduct/detail/:id" element={user && user.role === 'admin' ? <AdminProductDetail /> : <Login />} />
        <Route path="/order/:id" element={user && user.role === 'farmer' ? <OrderDetail /> : <Login />} />
        <Route path="/adminorder/:id" element={user && user.role === 'admin' ? <AdminOrderDetailPage /> : <Login />} />
        <Route path="/companyorder/:id" element={user && user.role === 'transportation' ? <CompanyOrderDetailPage /> : <Login />} />
        <Route path="/adminorder" element={user && user.role === 'admin' ? <AdminOrderPage /> : <Login />} />
        <Route path="/farmer" element={user && user.role === 'admin' ? <FarmerPage /> : <Login />} />
        <Route path="/viewcompany" element={user ? <CompanyPageFarmer /> : <Login />} />
        <Route path="/buyer" element={user && user.role === 'admin' ? <BuyerPage /> : <Login />} />
        <Route path="/company" element={user && user.role === 'admin' ? <AdminCompanyPage /> : <Login />} />
        <Route path="/order" element={user && user.role === 'farmer' ? <OrderPage /> : <Login />} />
        <Route path="/companyorder" element={user && user.role === 'transportation' ? <CompanyPage  /> : <Login />} />
        <Route path="/addproduct" element={user && user.role === 'farmer' ? <AddProuductPage /> : <Login />} />
        <Route path="/product/edit/:id" element={user && user.role === 'farmer' ? <EditProductPage /> : <Login />} />
        <Route path="/farmerprofile/:id" element={user && user.role === 'admin' ? <FarmerProfilePage /> : <Login />} />
        <Route path="/buyerprofile/:id" element={user && user.role === 'admin' ? <BuyerProfilePage /> : <Login />} />
        <Route path="/companyprofile/:id" element={user && user.role === 'admin' ? <CompanyProfilePage /> : <Login />} />
        <Route path="/blog" element={user ? <Blog /> : <Login />} />
        <Route path="/blog/:id" element={user ? <Single /> : <Login />} />
        <Route path="/addblog" element={user ? <Write /> : <Login />} />
        <Route path="/setting/:id" element={user ? <Settings /> : <Login />} />
        <Route path="/profile/:id"element={
    user ? (
      user.role === 'farmer' ? (
        <ProfilePage />
      ) : user.role === 'transportation' ? (
        <CompanyProfile /> // or whatever page you want farmers to be directed to
      ) : (
        <LandingPage />
      )
    ) : (
      <Login />
    )
  } />
        <Route path="/editprofile/:id" element={
    user ? (
      user.role === 'farmer' ? (
        <ProfileEdit />
      ) : user.role === 'company' ? (
        <CompanyEditProfile /> // or whatever page you want farmers to be directed to
      ) : (
        <LandingPage />
      )
    ) : (
      <Login />
    )
  } />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </BrowserRouter>
   
      
    </div>
  );
}

export default App;
