import React from "react";
import Sidenav from "../Sidenav";
import Typography from "@mui/material/Typography";
import { Box, Card, CardContent, Grid, Stack } from "@mui/material";
import Navbar from "../Components/Navbar";
import { GeoChart } from "../Charts/GeoChart";
import { PieChart } from "../Charts/PieChart";
import { HbarChart } from "../Charts/HbarChart";
import CountUp from 'react-countup';


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
              <Grid item md={5}>
                <Stack spacing={2} direction={"row"}>
                  <Card sx={{ minWidth: 49 + "%", height: 20 + "vh" }} id="gradient">
                    <CardContent  sx={{color:"#ffffff"}}>
                      <Typography mb={1} variant="h6">Visitors</Typography>
                      <Typography mb={1} variant="h5">
                        <CountUp delay={0.2} end={22000} duration={0.9}
                        />
                      </Typography>
                      <Typography>Since last week</Typography>
                    </CardContent>
                  </Card>

                  <Card sx={{ minWidth: 49 + "%", height: 20 + "vh" }} id="gradientlight">
                    <CardContent  sx={{color:"#ffffff"}}
                    >
                      <Typography mb={1} variant="h6">Total Sales</Typography>
                      <Typography mb={1} variant="h5">
                      <CountUp delay={0.2} end={150000} duration={0.9}
                        />
                        </Typography>
                      <Typography>This month</Typography>
                    </CardContent>
                  </Card>
                </Stack>

                <Box sx={{ marginTop: 2 }}>
                  <Stack spacing={2} direction={"row"}>
                    <Card sx={{ minWidth: 49 + "%", height: 20 + "vh" }} id="gradient">
                      <CardContent  sx={{color:"#ffffff"}}>
                        <Typography mb={1} variant="h6">Active Users</Typography>
                        <Typography mb={1} variant="h5">
                        <CountUp delay={0.2} end={15000} duration={0.9}
                        /></Typography>
                        <Typography>Currently online</Typography>
                      </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 49 + "%", height: 20 + "vh" }} id="gradientlight">
                      <CardContent sx={{color:"#ffffff"}}>
                        <Typography mb={1} variant="h6">Total Orders</Typography>
                        <Typography mb={1} variant="h5"> <CountUp delay={0.2} end={12500} duration={0.9}
                        /></Typography>
                        <Typography>This month</Typography>
                      </CardContent>
                    </Card>
                  </Stack>
                </Box>
              </Grid>

              <Grid item md={7} mb={2}>
                <Card sx={{ minWidth: 49 + "%", height: 42 + "vh" }}>
                  <CardContent>
                    <HbarChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <PieChart />
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
