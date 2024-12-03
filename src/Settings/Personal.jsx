import React from 'react'
import { TextField ,Box, Card, CardContent, Grid, Grid2, Stack, Typography ,MenuItem} from "@mui/material";

const Personal = () => {
  return (
    <Box sx={{display:"flex" , gap:2 }}>
      {/* Left card detail */}

      <Card  sx={{minWidth:49 + '%' , height: 55 + 'vh'}} >
        <CardContent >
          <Typography mb={2} variant='h6'  >
          Personal Information
          </Typography>
          <hr />

          <Grid container spacing={2} mt={2}>
              {/* Name and Location */}
              <Grid item xs={12} md={6} >
                <TextField
                  fullWidth
                  label="Name"
                  defaultValue="Anirudh Joshi"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} md={6} >
                <TextField
                  fullWidth
                  label="Location"
                  defaultValue="India"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} mt={2}>
                <TextField
                fullWidth
                label='Bio'
                variant="outlined"
                rows={3}
                multiline
                />
              </Grid>

              <Grid item xs={12} md={6} mt={2}>
                <TextField
                  fullWidth
                  select
                  label="User Type"
                  defaultValue="Super Admin"
                  variant="outlined"
                ><MenuItem value="Super Admin">Super Admin</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="User">User</MenuItem>
                </TextField>
              </Grid>
              </Grid>
        </CardContent>
      </Card>

      <Card  sx={{minWidth:49 + '%' , height: 55 + 'vh'}}>
        <CardContent>
        <Typography  mb={2}  variant='h6' >
          Contact Information
          </Typography>
          <hr />
          <Grid container spacing={2} mt={2}>
              {/* Name and Location */}
              <Grid item xs={12} md={6} >
                <TextField
                  fullWidth
                  label="Contact Phone"
                  defaultValue="96544XXXX6"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} md={6} >
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue="Anirudh.53.aj@gmail.com"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} mt={2}  >
                <TextField
                  fullWidth
                  label="Profile URL"
                  defaultValue= "https://anirudhjoshiportfolio.netlify.app/"
                  variant="outlined"
                />
              </Grid>


              <Grid item xs={12} mt={2}>
                <TextField
                fullWidth
                label='Address'
                variant="outlined"
                rows={3}
                multiline
                />
              </Grid>

              </Grid>
  
        </CardContent>
      </Card>
    </Box>
  )
}

export default Personal