import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { LoginPage,SignupPage,Home,CreateProduct, MyProducts, Cart } from "./routes/routes.js"
import "./App.css";


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
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
