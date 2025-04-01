import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { LoginPage,SignupPage,Home,CreateProduct, MyProducts, Cart, CreateAddress, SelectAddress } from "./routes/routes.js"
import "./App.css";
import ProductDetails from './pages/productDetails.jsx';
import Profile from './pages/profile.jsx';
import OrderConfirmation from './pages/OrderConfirmation.jsx';
import MyOrdersPage from './pages/MyOrdersPage.jsx';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LoginPage/>}/>  
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/createproduct' element={<CreateProduct />}/>
        <Route path='/myProducts' element={<MyProducts />}/>
        <Route path='/create-product/:id' element={<CreateProduct/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/createAddress' element={<CreateAddress/>}/>
        <Route path='/select-address' element={<SelectAddress/>}/>
        <Route path='/order-confirmation' element={<OrderConfirmation/>}/>
        <Route path ='/myorders' element={<MyOrdersPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
