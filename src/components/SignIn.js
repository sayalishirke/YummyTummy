import React, { useState } from 'react'
import './App.css'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
//import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const SignIn = () => {
  const navigate = useNavigate()
  const EmailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+[.a-zA-Z]+$/
  const PwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState({
    EmailError: '',
    PassError: '',
  })
  const handleEmailInputChange = (event) => {
    event.persist()
    setUser((user) => ({
      ...user,
      email: event.target.value,
    }))
    if (EmailRegex.test(user.email) === false || user.email === '') {
      setError((error) => ({
        ...error,
        EmailError: 'Please enter valid email adress',
      }))
    } else {
      setError((error) => ({
        ...error,
        EmailError: '',
      }))
      return true
    }
  }

  const handlePasswordInputChange = (event) => {
    event.persist()
    setUser((user) => ({
      ...user,
      password: event.target.value,
    }))
    if (PwdRegex.test(user.password) === false) {
      setError((error) => ({
        ...error,
        PassError: 'Please enter valid password',
      }))
    } else {
      setError((error) => ({
        ...error,
        PassError: '',
      }))
      return true
    }
  }

  const [submitted, setSubmitted] = useState(false)

  //const [valid, setValid] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if ((user.email && !user.password) || (!user.email && user.password)) {
      alert('All fields are mandatory')
    } else {
      if (user.email && user.password) {
        // setValid(true)
        //setSubmitted(true)
        navigate('/Main')
      }
    }
    setSubmitted(true)

    /*console.log(submitted)
    console.log(valid)
    if (submitted) {
      navigate('/Main')
    }*/
    console.log(user)
    console.log(error)

    /*
    console.log(submitted)
    console.log(valid)*/
  }

  return (
    <>
      <Header />
      <Box
        className='center'
        sx={{
          alignItems: 'center',

          width: 500,
          height: 300,
          backgroundColor: 'primary',
        }}
      >
        <form id='myform' onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <h2 className='center'>Sign In</h2>
            <TextField
              id='filled-basic'
              label='Email'
              variant='filled'
              type='text'
              value={user.email}
              onChange={handleEmailInputChange}
            />
            {/*{submitted && !user.email && <p>{error.EmailError}</p>}*/}
            <p style={{ color: 'red' }}>{error.EmailError}</p>
            <TextField
              id='filled-password-input'
              label='Password'
              type='password'
              variant='filled'
              value={user.password}
              onChange={handlePasswordInputChange}
            />
            {/*{submitted && !user.password && <span>{error.PassError}</span>}*/}
            <p style={{ color: 'red' }}>{error.PassError}</p>
            <Stack direction='row' className='center' spacing={2}>
              <Button variant='contained' color='success' type='submit'>
                Sign In
              </Button>
              <Button variant='contained' color='error' type='button'>
                Cancel
              </Button>
            </Stack>

            <Stack direction='row'>
              <h4>Dont have account?</h4>
              <Button onClick={() => navigate('/SignUp')} type='button'>
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </>
  )
}

export default SignIn
