import './App.css'
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login/Login'
import Registration from './components/Registration/Registration'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />}/>
        <Route path='registration' element={<Registration />}/>
      </Routes>
    </>
  )
}

