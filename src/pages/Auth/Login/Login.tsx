/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AuthLayout from "../Components/AuthLayou";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import { GoogleIcon } from "src/Assets";
import { Button, TextField } from "@mui/material";

const SignIn = (): JSX.Element => {
  return (
    <AuthLayout
      title="LOGIN"
      footerNode={
        <Box>
          <Typography variant="h6" mt={2} color="grey">
            Or log in with
          </Typography>
          <Box
            sx={{
              display: "flex",
              textAlign: "space-around",
              alignItems: "center",
            }}
          >
            <Button sx={{ display: "flex" }}>
              <FacebookIcon /> Facebook
            </Button>
            <Button sx={{ display: "flex" }}>
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
      <Button variant="outlined" fullWidth>
        LOG IN
      </Button>
    </AuthLayout>
  );
};

export default SignIn;
