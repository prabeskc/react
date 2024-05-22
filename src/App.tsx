import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Header from './layout/Header'
import Home from './component/pages/Home/Home'
import Product from './component/pages/products/Product'
import Pricing from './component/pages/pricing/Pricing'
import Contact from './component/pages/contact/Contact'
import About from './component/pages/aboutus/About'
import SingleProduct from './component/pages/products/product-details'



const App = () => {
  return (
    <BrowserRouter>
        <Header/>
    <Routes>
        <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/products" element={<Product/>} />
            <Route path="/products/:id" element={<SingleProduct/>} />
            <Route path="/aboutus" element={<About/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
