import React,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./LoginRegister.css";
import { Base_url } from "../../config";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/store";
import toast from 'react-hot-toast';
import axios from 'axios'
const LoginPage = () => {
  const navigate=useNavigate();
  const dispatch =useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${Base_url}/user/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(authActions.login(data));
        toast.success("User login Successfully");
        navigate("/");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        toast.error("Login failed. Please try again later.");
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        toast.error("No response from the server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };
  
  return (
    <div className="login-container">
      <div className="form-Box">
        <header>
          <h1 id="title">Login</h1>
        </header>
        <form>
          <input type="email" name="email" placeholder="Username or Email address" onChange={handleChange}/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
          <input type="button" value="Login" id="signinbtn" onClick={handleSubmit}/>

          <div className="links">
            <img src="images/auth/FB-ICON.webp" alt="" />
            <img src="/images/auth/google.png" alt="" />
            <img src="/images/auth/linkedIn_PNG26.png" alt="" />
          </div>
          <p className="signup">
            Not a member?<Link to="/register"> Sign Up</Link>{" "}
          </p>
          <p className="signup">
            Register as Speaker?<Link to="/speaker-register"> Sign Up</Link>{" "}
          </p>
          <p className="signup">
            Register as Organizer?<Link to="/org-register"> Sign Up</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
