// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import  { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AdminPage from "./pages/admin/AdminPage";
import SpeakerList from "./pages/speakers/SpeakerList";
import User from "./components/dashboard/User";
import EditProfile from "./components/dashboard/EditProfile";
import Speaker from "./pages/speakers/Speaker";
import Footer from "./components/footer/Footer";
import Event from "./pages/event/Event";
import Admin from "./components/dashboard/Admin";
import Organization from "./components/dashboard/Organization";
import SpeakerRegister from "./pages/auth/SpeakerRegister";
import OrganizerRegister from "./pages/auth/OrganizerRegister";
import SpeakerVerification from "./pages/speakers/SpeakerVerification";
import UserDash from "./pages/admin/UserDash";
import SpeakerDash from "./pages/admin/SpeakerDash";
import OrgDash from "./pages/admin/OrgDash";
import SpeakerInfo from "./pages/speakers/SpeakerInfo";
import Message from "./pages/admin/Message";
import RecomendedSpkForm from "./pages/message/RecomendedSpkForm";
import HelpMessage from "./pages/message/HelpMessage";
import RecomendedSpk  from "./pages/admin/RecomendedSpk";
import FindExpert from "./pages/find-expert/FindExpert";
import SpeakerProfile from "./pages/speakers/SpeakerProfile";
import UserProfile from "./pages/user/UserProfile";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/speaker-register" element={<SpeakerRegister />} />
        <Route path="/org-register" element={<OrganizerRegister />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/all-speaker" element={<SpeakerList />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/events" element={<Event />} />
        <Route path="/find-speaker" element={<SpeakerList />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/find-expert" element={<FindExpert />} />
        <Route path="/spk-profile/:id" element={<SpeakerProfile />} />
        <Route path="/user/profile" element={<UserProfile />} />


        <Route path="/s-verify" element={<SpeakerVerification />} />
        <Route path="/ad-user" element={<UserDash />} />
        <Route path="/ad-speaker" element={<SpeakerDash />} />
        <Route path="/ad-org" element={<OrgDash />} />
        <Route path="/help" element={<Message />} />
        <Route path="/recom" element={<RecomendedSpk />} />
        <Route path="/speaker/info/:id" element={<SpeakerInfo />} />
        <Route path="/recomend-speaker" element={<RecomendedSpkForm />} />
        <Route path="/support" element={<HelpMessage />} />

      </Routes>
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
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
