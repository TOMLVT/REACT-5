import React from 'react'
import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import OurStore from './pages/OurStore'
import Blogs from './pages/Blogs'
import CompareProduct from './pages/CompareProduct'
import WishList from './pages/WishList'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword'
import SingleBlog from './pages/SingleBlog'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import TermAndContions from './pages/TermAndContions'
import ShippingPolicy from './pages/ShippingPolicy'
import SingleProduct from './pages/SingleProduct'
import CartProduct from './pages/CartProduct'
import Checkout from './pages/Checkout'

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='product' element={<OurStore/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='cart' element={<CartProduct/>}/>
              <Route path='product/:id' element={<SingleProduct/>}/>
              <Route path='blogs' element={<Blogs/>}/>
              <Route path='checkout' element={<Checkout/>}/>
              <Route path='blog/:id' element={<SingleBlog/>}/>
              <Route path='compare-product' element={<CompareProduct/>}/>
              <Route path='wish-list' element={<WishList/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='forgot-password' element={<ForgotPassword/>}/>
              <Route path='signup' element={<Signup/>}/>
              <Route path='resetpassword' element={<ResetPassword/>}/>
              <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
              <Route path='refund-policy' element={<RefundPolicy/>}/>
              <Route path='shipping-policy' element={<ShippingPolicy/>}/>
              <Route path='term-and-conditions' element={<TermAndContions/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
