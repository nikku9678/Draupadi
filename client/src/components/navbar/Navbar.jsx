import {useEffect, useState } from "react"
import "./Navbar.css"

import { Link, useNavigate ,Navigate} from "react-router-dom";

import axios from "axios";
import { Base_url } from "../../config";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/store";


const Navbar =()=> {
  const [admin,setAdmin] =useState('')
  const token =localStorage.getItem("userId")
  console.log(token)
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const handleShowOff = ()=>{

    setIsNavExpanded(prev => !prev);
  }

  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");

  console.log(isLogin)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.get(`${Base_url}/user/logout`, {
        withCredentials: true,
      });

      alert("Logged Out Successfully");
      dispatch(authActions.logout());
      navigate("/");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(()=>{

      axios
        .get(`${Base_url}/user/profile`, {
          withCredentials: true,
        })
        .then((res) => {
        console.log(res.data.user.isAdmin)
        setAdmin(res.data.user.isAdmin)
        })
        .catch((error) => {
          console.log(error);
        });
  },[])

  if(admin) return <Navigate to='/admin' />
  return (
    <>
    <nav>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
        <i className="fas fa-bars" style={{color:'black'}}></i>
      </label>
      <label className="logo">
        <img src="images/logo.webp" alt="" />
      </label>
      <ul>
        <li><Link className="active" to="/">Home</Link></li>
        <li><Link to="/dias">Why the Dias?</Link></li>
        <li><Link to="/find-expert">Find an Expert</Link></li>
        {
          isLogin ? <><li><Link to="/" onClick={handleLogout}>Logout</Link></li></>:(<><li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li></>)
        }
      </ul>
    </nav>
    {/* <section></section> */}
    </>
  );
}

export default Navbar;