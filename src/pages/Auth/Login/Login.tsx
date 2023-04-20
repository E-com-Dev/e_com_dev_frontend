/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AuthLayout from "../Components/AuthLayou";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import { GoogleIcon } from "src/assets";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import { green } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";

import { Button, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const SignIn = (): JSX.Element => {
  return (
    <AuthLayout
      title="LOGIN"
      footerNode={
        <Box>
          <Typography variant="body1" mt={2} sx={{ color: "#808080" }}>
            Or log in with
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Button
              sx={{
                display: "flex",
                color: "#0000FF",
                background: "#ffffff",
                border: "1px solid black",
              }}
            >
              <FacebookIcon sx={{ color: "#0000ff", mr: 2 }} /> Facebook
            </Button>
            <Button
              sx={{
                display: "flex",
                color: "#000000",
                background: "#ffffff",
                border: 1,
              }}
            >
              <GoogleIcon style={{ height: 20 }} />
              Google
            </Button>
          </Box>
          <Box mt={10}>
            <Typography variant="h6" sx={{ color: "#6A983C" }}>
              Not a member ?{" "}
              <Link to="" style={{ color: "#6A983C" }}>
                Sign up now
              </Link>
            </Typography>
          </Box>
        </Box>
      }
    >
      <Box>
        <TextField
          sx={{ marginBottom: 3 }}
          name="email"
          placeholder="Email"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          name="password"
          placeholder="Password"
          type="password"
          sx={{
            marginBottom: 2,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: green[800],
              "&.Mui-checked": {
                color: green[600],
              },
            }}
          />
        }
        label="Remember me"
      />

      <Button variant="primary" fullWidth sx={{ height: 50 }}>
        <Link style={{ textDecoration: "none", color: "#ffffff" }} to="/home">
          Log In
        </Link>
      </Button>
    </AuthLayout>
  );
};

export default SignIn;
