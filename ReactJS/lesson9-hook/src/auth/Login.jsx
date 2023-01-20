import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const info = {
  email: "info@example.com",
  pass: "info2023",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const naviage = useNavigate();

  const formSubmit = e=>{
    e.preventDefault();
    if(!email || !pass){
        alert('please, fill input')
    }else{
        if (email === info.email && pass === info.pass) {
            naviage('/users')
        }else{
            alert('password or email is wrong!')
        }

    }
  }
  

  return (
    <div className="container mt-5">
      <h1 className="mt-5 text-center">Login</h1>

      <div className="d-flex align-items-center justify-content-center">
        <div className="col-6">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={e=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={e=>{setPass(e.target.value)}}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
