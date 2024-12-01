import React from 'react'
import Sidenav from '../Sidenav'
import { Box } from '@mui/material'
import Navbar from '../Components/Navbar';
import ProductList from './Products/ProductList';

const Products = () => {
  return (
    <>
    <div id="bgcolor">
    <Navbar/>
    <Box height={70} />
    <Box sx={{display:"flex"}}>
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <ProductList/>
    </Box>
    </Box>
    </div>
    </>
  )
}
export default Products