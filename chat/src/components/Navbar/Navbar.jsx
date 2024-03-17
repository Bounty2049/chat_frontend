import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className='header'>
      <Link to='/' className='home'>Home</Link>
      <nav className='navbar'>
        <Link to='/login' className='navigation'>Sign in</Link>
        <Link to='/registration' className='navigation'>Sign up</Link>
        <Link to='/' className='navigation'>Logout</Link>
      </nav>
    </header>
  )
}
