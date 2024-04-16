// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AdminPage from "./pages/admin/AdminPage";
import SpeakerList from "./pages/speakers/SpeakerList";
import User from "./components/dashboard/User";
import EditProfile from "./components/dashboard/EditProfile";
import Speaker from "./pages/speakers/Speaker";
import Footer from './components/footer/Footer'
import Event from './pages/event/Event'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/all-speaker" element={<SpeakerList />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/events" element={<Event />} />
      </Routes>
      <Footer/>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </BrowserRouter>
  );
};

export default App;
