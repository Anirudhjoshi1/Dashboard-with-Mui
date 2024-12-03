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
  Link
} from "@mui/material";
import {  useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/home");
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
            mb={1}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              color: "gray",
              fontSize: "15px",
            }}
            fontFamily={""}
            variant="h6"
            align="center"
          >
            Please Enter Your Detail
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "flex-start",
              fontWeight: "900",
            }}
            mb={3}
            fontFamily={"Gothic A1"}
            variant="h4"
            align="center"
            gutterBottom
          >
            Welcome ,
          </Typography>
          <form onSubmit={handleDashboard}>
            <Box mb={3} >
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
            <Box mb={1}>
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

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={4}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Remember for 30 days"
              />

              <Link href="#" underline="hover" variant="body2">
                Forget Password
              </Link>
            </Box>

            <Button
              fullWidth
              sx={{
                background:
                  "linear-gradient(158deg, rgba(40,34,70,1) 0% ,rgba(30,47,141,1) 100%)",
                marginBottom: "25px",
                padding: "10px",
              }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>

            <Button
              fullWidth
              sx={{ color: "black", backgroundColor: "white", padding: "10px" ,marginBottom:"25px" }}
              variant="contained"
              startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </Button>


            <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="body2">
              Don't have an account?{" "}
              <Link  href="/signup" underline="hover">
                Sign up
              </Link>
            </Typography>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
