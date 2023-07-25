import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from '../Pages/Home'

import WomensProduct  from '../Pages/WomensProduct'
import  KidsProduct  from '../Pages/KidsProduct'
import SingleProductPage  from '../Pages/SingleProductPage'
import Wishlist from "../Pages/Wishlist"
import  Cart  from '../Pages/Cart'
import { LoginOrSignUp } from '../Pages/LoginOrSignUp'
import { FullDetails } from '../Pages/FullDetails'
import { SeeFullDetails } from '../Pages/SeeFullDetails'
import Address  from '../Pages/Address'
import  Payment  from '../Pages/Payment'
import  Success  from '../Pages/Success'
import { AddProductPage } from './AddProductPage'
import Product from '../Pages/Product'
import PageNotFound from '../Pages/PageNotFound copy'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element={<Product />}></Route>
        <Route path="/women" element={<WomensProduct />}></Route>
        <Route path="/kids" element={<KidsProduct />}></Route>
        <Route path="/singleproduct/:id" element={<SingleProductPage />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/bag" element={<Cart />} ></Route>
        <Route path="/login" element={<LoginOrSignUp />} />
        <Route path="/fulldetails" element={<FullDetails />} />
        <Route path="/seeFullDetails" element={<SeeFullDetails />} />
        <Route path="/address" element={<Address />} ></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/success" element={<Success />} ></Route>
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />}></Route> */}
       
      </Routes>
  )
}
