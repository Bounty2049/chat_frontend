import React from 'react'
import './Login.css'
import { FaRegUser, FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function Login() {
  return (
    <div className='wrapper'>
        <form action='' method='POST' encType='utf-8'>
            <h2>Login</h2>

            <div className='input-box'>
              <input type='email' placeholder='Enter your email'></input>
              <MdOutlineEmail className='icon'/>
            </div>

            <div className='input-box'>
              <input type='text' placeholder='Enter your username'></input>
              <FaRegUser className='icon'/>
            </div>

            <div className='input-box'>
              <input type='password' placeholder='Enter your password'></input>
              <FaLock className='icon'/>
            </div>

            <div className='remember-forgot'>
              <label><input type='checkbox' />Remember me</label>
              <a href='#'>Forgot password ?</a>
            </div>
            <div className='submit'>
              <button type='submit'>Login</button>
            </div>

            <div className='register-link'>
              <p>Don't have an account ? <Link to='/registration'>Register</Link></p>
            </div>
        </form>
    </div>
  )
}
