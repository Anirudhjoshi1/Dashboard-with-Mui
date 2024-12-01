import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Setting from './Pages/Setting'
import About from './Pages/About'
import Analytics from './Pages/Analytics'
import Products from './Pages/Products'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home></Home>}></Route>
      <Route path="/products" exact element={<Products/>}></Route>
      <Route path="/analytics" exact element={<Analytics/>}></Route>
      <Route path="/setting" element={<Setting/>}></Route> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App