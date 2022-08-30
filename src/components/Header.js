import React from 'react'
import './App.css'
import { useLocation } from 'react-router-dom'

const Header = (props) => {
  return (
    <>
      <h2>Welcome {props.name}</h2>
    </>
  )
}

export default Header
