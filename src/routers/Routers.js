import React from 'react'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import ProductDetails from '../pages/ProductDetails'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="checkout" element={<ProtectedRoute>
        <Checkout/>
      </ProtectedRoute>}/>
      <Route path="shop/:id" element={<ProductDetails/>}/>
    </Routes>
  )
}

export default Routers;
