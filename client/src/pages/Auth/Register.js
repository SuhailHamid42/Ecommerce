import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();




    // e -> event
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/register", {
                name,
                email,
                password,
                phone,
                address,
                answer,
 
              });
              if (res && res.data.success) {
                  toast.success(res.data && res.data.message);
                  navigate("/login");
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
                <h1>Register Form</h1>
<form onSubmit = {handleSubmit}>

<div className="mb-3">

    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
  </div>

  <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
  </div> 



  <div className="mb-3">
    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
  </div>

  <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputPassword3" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
  </div>

  <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputPassword4" placeholder="Adress" value={address} onChange={(e) => setAddress(e.target.value) } required/>
  </div>

  <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputPassword5" placeholder="Your nickname(security question)" value={answer} onChange={(e) => setAnswer(e.target.value) } required/>
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
        </Layout>
  )
}

export default Register
