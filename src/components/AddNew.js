import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import FormHelperText from '@mui/material/FormHelperText'
import MenuItem from '@mui/material/MenuItem'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { FormGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Autocomplete from '@mui/material/Autocomplete'

const AddNew = () => {
  const navigate = useNavigate()

  const dict = {
    veg: {
      Indian: ['Puran poli', ' puri bhaji', 'pav bhaji'],
      Chinese: ['Veg Machurian', 'Honey chilli potatos', 'Veg spring rolls'],
      Italian: [
        'Four-Cheese Stuffed Shells',
        'White Bean Soup',
        'Arborio Rice',
      ],
    },

    nonveg: {
      Indian: ['chicken kolhapuri', 'mutton handi', 'fish fry'],
      Chinese: [
        ' Chicken Manchow Soup',
        'Chicken Lollipops',
        'Egg And Garlic Fried Rice',
      ],
      Italian: [
        'Penne Arrabiata Chicken',
        'Chicken Pesto Fusilli',
        'Chicken Stroganoff',
      ],
    },

    None: {
      None: ['None'],
      Indian: ['None'],
      Chinese: [' None'],
      Italian: ['None'],
    },
  }

  const [details, setDetails] = useState({
    name: '',
    contact: '',
    cuisine: 'None',
    category: 'None',
    menu: '',
  })

  const [vchecked, setVChecked] = useState(false)
  const [nvchecked, setNVChecked] = useState(false)
  const checkboxHandle1 = (event) => {
    setVChecked(!vchecked)

    setDetails((details) => ({
      ...details,
      category: 'veg',
    }))
  }
  const checkboxHandle2 = (event) => {
    setNVChecked(!nvchecked)

    setDetails((details) => ({
      ...details,
      category: 'nonveg',
    }))
  }
  const handleInputChange = (event) => {
    event.preventDefault()
    const value = event.target.value
    setDetails((details) => ({
      ...details,
      [event.target.name]: value,
    }))
  }

  const selectionHandler = (event) => {
    event.preventDefault()
    setDetails((details) => ({
      ...details,
      cuisine: event.target.value,
    }))
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setNVChecked(false)
    setVChecked(false)

    console.log(details)

    navigate('/Main', { state2: details })
  }
  console.log(details)

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 1000,
        },
      }}
    >
      <Paper elevation={8}>
        <form onSubmit={submitHandler}>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='stretch'
            spacing={2}
          >
            <TextField
              required
              id='outlined-required'
              label='Name'
              name='name'
              value={details.name}
              onChange={handleInputChange}
            />
            <FormHelperText>Required</FormHelperText>
            <TextField
              id='outlined-number'
              label='Contact Number'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              name='contact'
              value={details.contact}
              onChange={handleInputChange}
            />
            <FormHelperText>Required</FormHelperText>
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id='demo-simple-select-required-label'>
                Cuisine
              </InputLabel>
              <Select
                labelId='demo-simple-select-required-label'
                id='demo-simple-select-required'
                value={details.cuisine}
                label='Cuisine *'
                onChange={selectionHandler}
              >
                <MenuItem value='None'>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Indian'}>Indian</MenuItem>
                <MenuItem value={'Chinese'}>Chinese</MenuItem>
                <MenuItem value={'Italian'}>Italian</MenuItem>
              </Select>
              <FormHelperText>Select a cuisine</FormHelperText>
            </FormControl>

            <Stack direction='row' className='center' spacing={2}>
              <FormGroup disabled={details.cuisine}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={checkboxHandle1}
                      disabled={!details.cuisine}
                    />
                  }
                  label='Veg'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={checkboxHandle2}
                      disabled={!details.cuisine}
                    />
                  }
                  label='Non Veg'
                />
              </FormGroup>
            </Stack>

            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              disabled={!vchecked && !nvchecked}
            >
              <InputLabel id='demo-simple-select-required-label'>
                Menu
              </InputLabel>
              <Select
                labelId='demo-simple-select-required-label'
                id='demo-simple-select-required'
                value={details.menu}
                label='Menu *'
                name='menu'
                onChange={handleInputChange}
              >
                {dict[details.category][details.cuisine].map(
                  (option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  )
                )}
              </Select>

              <FormHelperText>Required</FormHelperText>
            </FormControl>
            <Button variant='contained' color='success' type='submit'>
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  )
}

export default AddNew
