import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Profile = () => {
  return (
    <Box sx={{display:"flex" , gap:2 }}>
      {/* Left card detail */}
      <Card sx={{minWidth:400 , height: 38 + 'vh'}}>
        <CardContent>
          <Typography variant='h6' gutterBottom mb={2}  >
            Anirudh Joshi
          </Typography>
          <hr />

          <Box sx={{display:'flex' , alignItems: 'center' ,gap:2 , mb:3 ,mt:2}}>
            <MailOutlineIcon/>
            <Typography variant='body2'>Anirudh.53.aj@Gmail.com</Typography>
          </Box>

          <hr />
          <Box sx={{display:'flex' , alignItems: 'center' ,gap:2 , mb:3 ,mt:2}}>
            <PhoneIcon/>
            <Typography variant='body2'> (+91) 96544xx086</Typography>
          </Box>

          <hr />

          <Box sx={{display:'flex' , alignItems: 'center' ,gap:2 , mb:3 ,mt:2}}>
            <LocationOnIcon/>
            <Typography variant='body2'>Delhi , India</Typography>
          </Box>

        </CardContent>
      </Card>


      {/* Right Profile Details Card */}

      <Card sx={{flexGrow:1}}>
        <CardContent>
          <Typography variant='h6' gutterBottom mb={2}  >About Me</Typography>
          <hr />
          <Typography variant='body2'> I am a web enthusiast specializing in Front-end development, with expertise in HTML, CSS, JavaScript, and React. I am passionate about creating intuitive, visually appealing, and user-friendly web interfaces. 
          While my primary focus is Front-end development, my knowledge of Cybersecurity enables me to build websites with enhanced security features.</Typography>
          <br />
          <Typography variant='h6' gutterBottom  mb={2}  >Details</Typography>

          <hr />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body2" fontWeight="bold">
                Full Name:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">Anirudh Joshi</Typography>
            </Grid>

      
            <Grid item xs={6}>
              <Typography variant="body2" fontWeight="bold">
                Father's Name:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">Rakesh Joshi</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body2" fontWeight="bold">
                Address:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">Delhi, India</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body2" fontWeight="bold">
                Zip Code:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">1100xxx2</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body2" fontWeight="bold">
                Website:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2"><a target='blank' href="https://anirudhjoshiportfolio.netlify.app/">https://anirudhjoshiportfolio.netlify.app/</a></Typography>
            </Grid>
          </Grid>
        
        </CardContent>
        
      </Card>
    </Box>
  )
}

export default Profile