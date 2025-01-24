import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/footer/Footer'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/> }/>
        <Route path='/womens' element={<ShopCategory category="women"/>} />
        <Route path='/kids' element={<ShopCategory category="kid"/>} />
        <Route path='/product' element={<Product/>}>
          <Route path=':ProductId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/loginsignup' element={<LoginSignup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App