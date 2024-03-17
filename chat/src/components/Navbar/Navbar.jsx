import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='login'>Sign in</Link>
        <Link to='registration'>Sign up</Link>
      </nav>
    </div>
  )
}
