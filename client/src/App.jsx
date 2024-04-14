// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AdminPage from "./pages/admin/AdminPage";
import SpeakerList from "./pages/speakers/SpeakerList";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<LoginPage/>} /> 
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/all-speaker" element={<SpeakerList/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App