import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
const AddNew = () => {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField id='filled-basic' label='Filled' variant='filled' />

      <FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
    </Box>
  )
}

export default AddNew
