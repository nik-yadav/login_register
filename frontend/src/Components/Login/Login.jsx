import React, { useEffect, useState } from "react";

import "./Login.css"
import { Link } from "react-router-dom";

const Login = () => {
  
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })

  const onChange = (event) =>{
    setCredentials({...credentials, [event.target.type]:event.target.value})
  }

  useEffect(()=>{
    console.log(credentials);
  }, [credentials])

  return (
    <div className="box-control">
      <div className="heading">
        <h2>Login</h2>
      </div>
      <form className="loginform">
        <div className="email">
          <label htmlFor="emailId">Email:</label>
          <input type="email" id="emailId" onChange={onChange} />
        </div>
        <div className="password">
          <label htmlFor="passwordId">Password:</label>
          <input type="password" id="passwordId" onChange={onChange} />
        </div>

        <button type="submit">Submit</button>

        <Link to={"/signup"}>New User? Register</Link>
      </form>
    </div>
  );
};

export default Login;
