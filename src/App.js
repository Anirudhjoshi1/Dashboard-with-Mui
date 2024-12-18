import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Setting from "./Pages/Setting";
import Analytics from "./Pages/Analytics";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/signup" exact element={<SignUp />}></Route>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/products" exact element={<Products />}></Route>
          <Route path="/analytics" exact element={<Analytics />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
