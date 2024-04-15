import React,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./LoginRegister.css";
import { Base_url } from "../../config";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/store";
import toast, { Toaster } from 'react-hot-toast';
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
      const  {data}  = await axios.post(
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
        localStorage.setItem("userId", data?.user._id);
        dispatch(authActions.login());
        toast.success("User login Successfully");

        if(data.user.role==='user'){
          navigate('/')
        }else if(data.user.role==='Speaker'){
          navigate('/speaker')
        }else{
          navigate('/admin')

        }

      }
    } catch (error) {
       
      console.log(error);
    }
    console.log(formData);
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
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
