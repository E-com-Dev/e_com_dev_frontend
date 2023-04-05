/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AuthLayout from "../Components/AuthLayou";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import { GoogleIcon } from "src/Assets";
import { Button, TextField } from "@mui/material";
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
            <Button variant="primary" sx={{ display: "flex" }}>
              <FacebookIcon sx={{ color: "#0000ff" }} /> Facebook
            </Button>
            <Button variant="primary" sx={{ display: "flex" }}>
              <GoogleIcon style={{ height: 20 }} />
              Google
            </Button>
          </Box>
        </Box>
      }
    >
      <Box>
        <TextField
          sx={{ marginBottom: 2 }}
          name="email"
          placeholder="Email"
          fullWidth
        />
        <TextField
          fullWidth
          name="password"
          placeholder="Password"
          type="password"
          sx={{
            marginBottom: 2,
          }}
        />
      </Box>
      <Button variant="primary" fullWidth sx={{ height: 50 }}>
        <Link style={{ textDecoration: "none" }} to="/home">
          Log In
        </Link>
      </Button>
    </AuthLayout>
  );
};

export default SignIn;
