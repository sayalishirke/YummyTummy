import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import './App.css'
import Header from './Header'
import { Link } from 'react-router-dom'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import Stack from '@mui/material/Stack'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddNew from './AddNew'
import MyContext from './UserContext'
import Axios from 'axios'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
//import * as fs from 'fs'
const Main = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState([])
  const [fetch, setFetch] = useState(false)
  const [clicked, setClicked] = useState(false)
  const fetchList = () => {
    Axios.get('http://localhost:3004/details').then((res) => {
      setProduct(res.data)
    })
    setFetch(true)
    // console.log(product)
  }

  const clickHandle = () => {
    setClicked(true)
  }
  // const location = useLocation()
  //const LOCAL_STORAGE_KEY = 'Itemarray'
  {
    /*const renderList = props.contacts.map((contact) => {
  return (
    <ContactCard
      contact={contact}
      clickHander={deleteConactHandler}
      key={contact.id}
    />
  )
})

  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems([...items, { ...item }])
  }
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  //[] ->to run only for first render*/
  }
  {
    /*const fs = require('fs')
  fs.readFile('./details.json', 'utf8', (err, jsonString) => {
    if (err) {
      return
    }
    try {
      const customer = JSON.parse(jsonString)
    } catch (err) {
      console.log('Error parsing JSON string:', err)
    }
  })*/
  }
  return (
    <>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdFKAx5fhuJHLX7trX2q5nst3pmTiJIrqfw&usqp=CAU'
        alt='logo'
        width='150'
        height='150'
        className='center'
      />

      {/*<h2>Welcome {location.item.name}</h2>*/}

      <Button onClick={fetchList}>Display List</Button>
      <List>
        {fetch ? (
          product.map((option, index) => (
            <ListItem key={option.id} value={option.name}>
              {option.name}
              <Button onClick={clickHandle}>
                <InfoIcon />
              </Button>
              {clicked && <div>{option.contact}</div>}
            </ListItem>
          ))
        ) : (
          <>list not found</>
        )}
      </List>
      <Stack direction='row' className='center' spacing={2}>
        <Button
          variant='contained'
          color='success'
          type='button'
          onClick={() => {
            navigate('/Main/AddNew')
          }}
        >
          Add
        </Button>
        <Button
          onClick={() => navigate('/')}
          type='button'
          variant='contained'
          color='error'
        >
          Log Out
        </Button>
      </Stack>
    </>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
]

export default Main
