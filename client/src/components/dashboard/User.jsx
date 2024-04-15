import React,{useState,useEffect} from 'react'
import AdminPage from '../../pages/admin/AdminPage';
import { Base_url } from '../../config';
import axios from 'axios'
import Speaker from '../../pages/speakers/Speaker';
import Home from '../../pages/home/Home';
const User = () => {
     const [admin, setAdmin] = useState(false);
     const [user, setUser] = useState(false);
    useEffect(() => {
        axios
          .get(`${Base_url}/user/profile`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data.user.isAdmin,"2");
            if(res.data.user.isAdmin){
                setAdmin(true);
                
                window.location.href='/admin';
            }
            else if(res.data.user ==="user"){

                window.location.href='/';
            }else{
                window.location.href='/speaker';

            }
        console.log(res.data.user.role)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
    //   return (admin) ?  <AdminPage/>: (!admin && !user)? <Speaker/> : <Home/>
 
}

export default User
