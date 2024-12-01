import React from "react";
import Sidenav from "../Sidenav";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import Navbar from "../Components/Navbar";
import Grid from "@mui/material/Grid2";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import "../dash.css"
import StoreFrontIcon from '@mui/icons-material/Storefront'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Accordion from "../Components/Accordian";
import BarChart from "../Charts/BarChart";

const Home = () => {
  return (
    <>
    <div id="bgcolor">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Stack spacing={2} direction={"row"}>
              <Card sx={{ minWidth: 49 + "%" , height: 152 }} id="gradient">
                <CardContent>
                <div id="hero1">
                  <CreditCardIcon/>
                </div>
                  <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                    $500.00
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div"
                  sx={{color: "#ccd1d1"}}>
                    Total Earnings
                  </Typography>
                  </CardContent>
              </Card>

              <Card sx={{ minWidth: 49 + "%" , height: 152 }} id="gradientlight">
              <CardContent>
              <div id="hero1">
                  <ShoppingBagIcon/>
                </div>
                  <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                    $900.00
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div"
                  sx={{color: "#ccd1d1"}}>
                    Total Orders
                  </Typography>
                  </CardContent>
              </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
            <Stack spacing={2} >
            <Card sx={{minWidth:450 + "px"}} id="gradientlight">
                    <Stack spacing={2} direction={"row"}>
                    <div id="hero">
                    <StoreFrontIcon />
                    </div>
                 
                    <div className="paddingall">
                    <span className="pricetitle1">$203k</span>
                    <br />
                    <span className="pricesubtitle1">Total Income</span>
                    </div>
                    </Stack>
              
              </Card>
              <Card>
                    <Stack spacing={2} direction={"row"}>
                    <div id="heroblack">
                    <StoreFrontIcon />
                    </div>
                    <div className="paddingall">
                    <span className="pricetitle">$203k</span>
                    <br />
                    <span className="pricesubtitle">Total Income </span>
                    </div>
                    </Stack>
             
              </Card>
            </Stack>
            </Grid>

         
            <Grid size={8}>
            <Card sx={{ height:60 + "vh"}}>
                  <CardContent>
                 <BarChart/>
                  </CardContent>      
              </Card>
            </Grid>
            <Grid size={4}>
            <Card sx={{ height:60 + "vh"}}>
                  <CardContent>
                  <div className="paddingall">
                    <span className="pricetitle">Popular Products</span>
                    </div>
                    
                    <Accordion/>
                  </CardContent>      
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </div>
    </>
  );
};

export default Home;
