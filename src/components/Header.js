import React from 'react'
import './App.css'

const Header = (props) => {
  return (
    <>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdFKAx5fhuJHLX7trX2q5nst3pmTiJIrqfw&usqp=CAU'
        alt='logo'
        width='150'
        height='150'
        className='center'
      />
      <h1>{props.name}</h1>
    </>
  )
}

export default Header
