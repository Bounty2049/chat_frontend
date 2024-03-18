import React, { useState } from 'react'
import axios from 'axios'
import { login } from '../Requests/Requests';
import './Login.css'
import { FaRegUser, FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function Login() {
  const [data, setData] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/users/api/auth/', formData);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error sending daat:', error)
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className='input-box'>
            <input 
              type='email' 
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'>
            </input>
            <MdOutlineEmail className='icon'/>
          </div>

          <div className='input-box'>
            <input 
              type='text' 
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='Enter your username'>  
            </input>
            <FaRegUser className='icon'/>
          </div>

          <div className='input-box'>
            <input 
              type='password'
              name='password'
              value={formData.password1}
              onChange={handleChange} 
              placeholder='Enter your password'>
            </input>
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
