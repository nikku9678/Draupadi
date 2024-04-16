import { useEffect, useState } from "react";
import "./Navbar.css";
import toast from "react-hot-toast";
import { Link, useNavigate, Navigate } from "react-router-dom";

import axios from "axios";
import { Base_url } from "../../config";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/store";

const Navbar = () => {
  // const [admin, setAdmin] = useState(localStorage.setItem("admin",false));
  const token = localStorage.getItem("userId");
  console.log(token);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(true);
  const handleShowOff = () => {
    setIsNavExpanded((prev) => !prev);
  };

  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");

  console.log(isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.get(`${Base_url}/user/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully");
      dispatch(authActions.logout());
      navigate("/");
      localStorage.clear();
    } catch (error) {
      toast.error(error);
    }
  };

  
  // if (admin) return <Navigate to="/admin" />;
  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars" style={{ color: "black" }}></i>
        </label>
        <label className="logo">
          <img src="images/logo.webp" alt="" />
        </label>
        <ul>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dias">Why the Dias?</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/find-expert">Find an Expert</Link>
          </li>
          {isLogin ? (
            <>
              <li>
               <Link to="/user"> <i className="fa-solid fa-user"  style={{color:'blue',fontSize:'20px'}}></i></Link>
              </li>
              <li>
              <Link to="/" onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket" style={{color:'red',fontSize:'20px'}}></i>
                </Link>
              </li>
            </>
          ) : (
            <>
              {/* <li>
                <Link to="/register">Register</Link>
              </li> */}
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>

        
      </nav>
      {/* <section></section> */}
    </>
  );
};

export default Navbar;
