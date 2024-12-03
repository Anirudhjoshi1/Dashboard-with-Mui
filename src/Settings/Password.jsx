import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Password = () => {
  return (
    <>
    <Box sx={{display:'flex' , gap:2}}>
      <Card sx={{minWidth:100 + "%"}}>
        <CardContent>
          <Typography variant='h6' mb={2}>
            Change Password
          </Typography>

          <hr />

          <Grid container spacing={2} mt={2}>
          <Grid item xs={12} md={6}>
          <TextField
          fullWidth
          variant='outlined'
          label="Current Password"
          type='password'
          />
          </Grid>
          </Grid>


          <Grid container spacing={2} mt={2}>
          <Grid item xs={12} md={6}>
          <TextField
          fullWidth
          variant='outlined'
          label="New Password"
          type='text'
          />
          </Grid>

          <Grid item xs={12} md={6}>
          <TextField
          fullWidth
          variant='outlined'
          label="Confirm Password"
          type='text'
          />
          </Grid>
          </Grid>

          <Box sx={{mt:3}}>
          <Button id='btn_Submit'  variant="contained">Submit</Button>
          </Box>

        </CardContent>
      </Card>
    </Box>
    </>
  )
}

export default Password