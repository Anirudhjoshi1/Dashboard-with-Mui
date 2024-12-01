import React from "react";
import Sidenav from "../Sidenav";
import Typography from "@mui/material/Typography";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack
} from "@mui/material";
import Navbar from "../Components/Navbar";

const Analytics = () => {
  return (
    <>
      <div id="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

            <Grid container spacing={2}>
              <Grid size={2}>
              <Stack spacing={2} direction={"row"}> 
              <Card sx={{ maxWidth: 345 , height:20 + "vh" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 , height:20 + "vh" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ height:40 + "vh" , minWidth: 845}}>
                  <CardContent>
                    
                  </CardContent>      
              </Card>
            </ Stack>


            <Card sx={{ maxWidth: 345 , height:20 + "vh" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>


            <Card sx={{ maxWidth: 345 , height:20 + "vh" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
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
export default Analytics;
