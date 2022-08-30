import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import './App.css'
import Header from './Header.js'
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
const Main = () => {
  const navigate = useNavigate()
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

      <ImageList sx={{ width: 500, height: 450 }} gap={5}>
        <ImageListItem key='Subheader' cols={2}></ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <Link to='https://food.ndtv.com/food-drinks/healthy-breakfast-recipes-7-desi-oats-recipes-that-are-a-must-add-to-your-menu-3275464'>
                    <InfoIcon />
                  </Link>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
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
