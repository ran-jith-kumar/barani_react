import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from '../compnents/Home';
import Singleproduct from '../pages/Singleproduct';
import Navbars from '../pages/Navbars';
import Cart from '../pages/Cart'
function Routesroute() {
  return (
    <div>
      <Navbars/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
        <Route path='/cart'  element={<Cart/>}/>
       </Routes>
    </div>
  )
}

export default Routesroute
