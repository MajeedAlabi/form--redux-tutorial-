import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Home";
import Create from "./assets/Create";
import Update from "./assets/Update";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  )
}