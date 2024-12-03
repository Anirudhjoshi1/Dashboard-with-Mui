import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
  FormControlLabel,
  Checkbox,
  Link,
  Divider,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/Home");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          style={{ padding: "50px", height: "480px", maxWidth: "400px" }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent:"center",
              fontWeight: "800",
              fontStyle:"normal"
              
            }}
            mb={2}
            fontFamily={"Gothic A1"}
            variant="h4"
            align="center"
            gutterBottom
          >
            Sign up
          </Typography>
          <form onSubmit={handleDashboard}>

          <Box mb={2} >
              <TextField
                label="Username"
                type="name"
                fullWidth
                required
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>
            
            <Box mb={2} >
              <TextField
                label="Email address"
                type="email"
                fullWidth
                required
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box mb={5}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>

            <Button
            fullWidth
              sx={{
                background:
                  "linear-gradient(158deg, rgba(40,34,70,1) 0% ,rgba(30,47,141,1) 100%)",
                marginBottom: "15px",
                padding: "10px",
              }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>


            
            <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="body2" color="gray">
              Already have an Account ?{" "}
              <Link href="/" underline="hover">
                Log in
              </Link>
            </Typography>
            </Box>


    <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
      <Divider sx={{ flex: 1 }} />
      <Typography
        variant="body2"
        sx={{ mx: 1, color: "gray"}}
      >
        or
      </Typography>
      <Divider sx={{ flex: 1 }} />
    </Box>

 
            <Button
            fullWidth
              sx={{  color: "black", backgroundColor: "white", padding: "10px" ,marginBottom:"25px" }}
              variant="contained"
              startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </Button>
         


          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUp;
