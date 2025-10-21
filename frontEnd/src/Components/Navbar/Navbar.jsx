import React from 'react'
import './Navbar.css'
import { assets} from '../../assets/assets'
import {useNavigate} from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const Navbar = () => {

  const {token} = useAppContext()
  const navigate = useNavigate()

  return (
    <div className='navbar'>
      <img onClick={()=>navigate('/')}
      src={assets.logo} alt="" className='logo'/>  
      <button type='button' onClick={()=>navigate('/admin')}
       className='login'>
        {token? 'Dashboard' :"Login"}
        <img src={assets.arrow} alt="" />
      </button>
    </div>
  )
}

export default Navbar
