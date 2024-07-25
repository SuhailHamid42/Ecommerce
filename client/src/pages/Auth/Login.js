import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
// import { toast } from 'react-toastify';
import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
  
  
  const [auth, setAuth] = useAuth()
  
      // e -> event
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              const res = await axios.post("/api/v1/auth/login", {

                  email,
                  password,
               
                });
                if (res && res.data.success) {
                    toast.success(res.data && res.data.message);
                    setAuth({
                      ...auth,
                      user: res.data.user,
                      token: res.data.token,
                    });
                    localStorage.setItem('auth', JSON.stringify(res.data));
                    navigate(location.state || "/");
                } else {
                  toast.error(res.data.message);
                }
              
          } catch (error) {
              console.log(error)
              toast.error("Something went wrong");
          }
      }
  
  return (
    <Layout title="Register ecommerse">
    <div className="register">
        <h1>Login Form</h1>
<form onSubmit = {handleSubmit}>


<div className="mb-3">
<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
</div> 


<div className="mb-3">
<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
</div>



<button type="button" className="btn" onClick={() => {navigate('/ForgotPassword')}}>Forgot Password</button>
<button type="submit" className="btn btn-primary">Submit</button>

</form>
</div>
</Layout>
  )
}

export default Login
