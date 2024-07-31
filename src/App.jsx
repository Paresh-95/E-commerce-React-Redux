import React from 'react'
import './App.css'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Header from "./components/Header"
import {Routes,Route} from "react-router-dom"
import Purchase from './components/Purchase'


function App() {  
  return (
    <>
      <div>
         <Header/>
          <div>
            <Routes>
              <Route path={"/"} element={<Home/>} />
              <Route path={"/cart"} element={<Cart/>}  />
               <Route path={"/purchased"} element={<Purchase/>}  />
            </Routes>
          </div>
      </div>
    </>
  )
}

export default App
