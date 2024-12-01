import React from 'react'
import Sidenav from '../Sidenav'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
import Navbar from '../Components/Navbar';
import Lists from '../Settings/List';

const Setting = () => {
  return (
    <>
    <div id='bgcolor'>
    <Navbar/>
    <Box height={70} />
    <Box sx={{display:"flex"}}>
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Lists/>
    </Box>
    </Box>
    </div>
   
    </>
  )
}
export default Setting