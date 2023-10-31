import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import "./Register.css"

const Register = () => {

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
        <h2>Register</h2>
      </div>
      <form className="registerform">
        <div className="email">
          <label htmlFor="emailId">Email:</label>
          <input type="email" id="emailId" onChange={onChange} />
        </div>
        <div className="password">
          <label htmlFor="passwordId">Password:</label>
          <input type="password" id="passwordId" onChange={onChange} />
        </div>

        <button type="submit">Submit</button>

        <Link to={"/signup"}>Alerady a user? Login</Link>
      </form>
    </div>
  )
}

export default Register