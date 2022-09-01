import React, { useContext } from 'react'
import './App.css'
import { useLocation } from 'react-router-dom'
import SignIn from './SignIn.js'
import MyContext from './UserContext'
const Header = () => {
  const { user } = useContext(MyContext)

  return (
    <>
      <h2>welcome, {user.username}</h2>
    </>
  )
}

export default Header
