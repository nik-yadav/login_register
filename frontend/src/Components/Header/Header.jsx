import React from 'react'
import { Link } from 'react-router-dom';

import icon from "../../asset/image.png";
import "./Header.css"

const Header = () => {
  return (
    <div className='wrap'>
        <div className='wrap-left'>
            <img src={icon} alt='' />
        </div>
        <div className='wrap-right'>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Register</Link>
        </div>
    </div>
  )
}

export default Header