import React, { useState } from 'react'
import axios from 'axios';
import './Registration.css'
import { FaRegUser, FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/users/api/reg/', formData)
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };



  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <div className='input-box'>
            <input 
              type='email' 
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter email' 
              required />
            <MdOutlineEmail className='icon'/>
        </div>

        <div className='input-box'>
            <input 
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange} 
              placeholder='Enter username'
              required />
            <FaRegUser className='icon'/>
        </div>

        <div className='input-box'>
            <input 
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange} 
              placeholder='Enter password' 
              required />
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
