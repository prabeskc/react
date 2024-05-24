import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Header from './layout/Header'
import Home from './pages/Home/Home'
import Contact from './pages/contact/Contact'
import Pricing from './pages/pricing/Pricing'
import Product from './pages/products/Product'
import SingleProduct from './pages/products/product-details'
import Post from './pages/Post/Post'
import PostDetails from './pages/Post/PostDetail'
import About from './pages/aboutus/About'
import PostDetailPage from './pages/Post/PostDetail'




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
            <Route path="/Post" element={<Post />} />
            <Route path="/Post/:id" element={<PostDetailPage />} />
            <Route path="/aboutus" element={<About/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
