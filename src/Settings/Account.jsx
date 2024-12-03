import React, { useState } from "react";
import {
  TextField,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  MenuItem,
} from "@mui/material";

import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

const Account = () => {
  const [state, setState] = useState({
    Anirudh: true,
    Varun: false,
    Aakash: false,
  });

  const handlechange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Card sx={{ minWidth: 100 + "%" }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              General Setting
            </Typography>
            <hr />

            <Grid container spacing={2} mt={2}>
              {/* Name and Location */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Username"
                  defaultValue="Anirudh Joshi"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Account Email"
                  defaultValue="Anirudh.53.aj@gmail.com"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} md={6} mt={2}>
                <TextField
                  fullWidth
                  label="User Type"
                  select
                  defaultValue="Super Admin"
                  variant="outlined"
                >
                  <MenuItem value="Super Admin">Super Admin</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="User">User</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} md={6} mt={2}>
                <TextField
                  fullWidth
                  label="Location"
                  select
                  defaultValue="India"
                  variant="outlined"
                >
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="China">China</MenuItem>
                  <MenuItem value="Japan">Japan</MenuItem>
                  <MenuItem value="Russia">Russia</MenuItem>
                  <MenuItem value="UAE">UAE</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ display: "flex", gap: 2 , marginTop:"20px" }}>
        <Card sx={{ minWidth: 100 + "%" }}>
          <CardContent>
            <Typography variant="h6" mb={1}>
            Advance Setting
            </Typography>
            <hr />

            <Box >
              <Typography variant="body1" color="gray">Assign Responsibility</Typography>
            </Box>

            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Anirudh}
                      onChange={handlechange}
                      name="Anirudh"
                    />
                  }
                  label="Anirudh"
                />

                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Varun}
                      onChange={handlechange}
                      name="Varun"
                    />
                  }
                  label="Varun"
                />

                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Aakash}
                      onChange={handlechange}
                      name="Aakash"
                    />
                  }
                  label="Aakash"
                />
              </FormGroup>
            </FormControl>

            <Box >
              <Typography variant="body2" color="gray">Be Careful</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Account;
