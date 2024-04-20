import React,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./LoginRegister.css";
import { Base_url } from "../../config";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/store";
import toast from "react-hot-toast";
import axios from 'axios'
const SpeakerRegister= () => {
  const navigate=useNavigate();
  const dispatch =useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    
    email: "",
    password:"",
    phone: "",
    role: "Speaker",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData)
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const  {data}  = await axios.post(
        `${Base_url}/user/register`,
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
        toast.success("User register Successfully");
        navigate("/login");
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
          <h1 id="title">Register</h1>
        </header>
        <form>
    
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange}/>
          
          <input type="email" name="email" placeholder="Enter email" onChange={handleChange}/>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange={handleChange}/>
          <input type="password" name="password"placeholder="Password" onChange={handleChange}/>

          {/* <input type="text" placeholder="Tell me about yourself" onChange={handleChange}/>
          <input type="text" placeholder="Qualification" onChange={handleChange}/>
          <input type="text" placeholder="expertise" onChange={handleChange}/>
          <input type="text" placeholder="organisation or company name" onChange={handleChange}/>
          <input type="text" placeholder="your designation in organisation" onChange={handleChange}/> */}
          {/* <input type="number" placeholder="Experience(in years)" onChange={handleChange}/> */}
          <input type="button" value="Sign Up" id="signinbtn" onClick={handleSubmit}/>

          <p className="signup">
            Already Registered? <Link to="/login">Log in</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SpeakerRegister;
