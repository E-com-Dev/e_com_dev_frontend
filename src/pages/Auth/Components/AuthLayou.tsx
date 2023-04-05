import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IAuthLayout } from "../Interface";

const AuthLayout = ({
  title,
  children,
  footerNode,

  onAction,
}: IAuthLayout) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box mt={15}>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              mb: 5,
            }}
            variant="h5"
          >
            {title}
          </Typography>
          <Box className="login-container">
            <Box className="page-main-container">
              <Box component="form" onSubmit={onAction}>
                <Box>{children}</Box>
              </Box>
              {footerNode && (
                <Box sx={{ textAlign: "center" }}>{footerNode}</Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
