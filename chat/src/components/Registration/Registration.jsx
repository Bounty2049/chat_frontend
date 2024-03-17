import React from 'react'
import './Registration.css'
import { FaRegUser, FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Registration() {
  return (
    <div className='wrapper'>
      <form>
        <h2>Registration</h2>
        <div className='input-box'>
            <input type='email' placeholder='Enter email'></input>
            <MdOutlineEmail className='icon'/>
        </div>

        <div className='input-box'>
            <input type='text' placeholder='Enter username'></input>
            <FaRegUser className='icon'/>
        </div>

        <div className='input-box'>
            <input type='password' placeholder='Enter password'></input>
            <FaLock className='icon'/>
        </div>

        <div className='input-box'>
            <input type='password' placeholder='Repeat password'></input>
            <FaLock className='icon'/>
        </div>

        <div className='submit'>
              <button type='submit'>Register</button>
            </div>

        <div className='register-link'>
            <p>Already have an account ? <Link to='/login'>Login</Link></p>
        </div>

      </form>
    </div>
  )
}
