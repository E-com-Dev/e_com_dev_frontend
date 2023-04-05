import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { IAuthLayout } from "../Interface";

const AuthLayout = ({
  title,
  children,
  btnText,
  footerNode,
  loading,
  onAction,
}: IAuthLayout) => {
  return (
    <Box marginX={25} marginY={20}>
      <Box>
        <Box maxWidth="400px">
          <Typography
            sx={{
              textAlign: "center",
            }}
            variant="h5"
          >
            {title}
          </Typography>
          <Box className="login-container">
            <Box py={2} px={3} className="top-header"></Box>
            <Box className="page-main-container">
              <Box component="form" onSubmit={onAction}>
                <Box>{children}</Box>
                <Button
                  color="primary"
                  type="submit"
                  size="large"
                  fullWidth
                  disabled={loading}
                  startIcon={
                    loading && (
                      <CircularProgress
                        size={16}
                        sx={{
                          fontSize: 1,
                        }}
                      />
                    )
                  }
                  sx={{
                    mt: 1,
                  }}
                >
                  {btnText}
                </Button>
              </Box>
              {footerNode && (
                <Box sx={{ textAlign: "center", mt: 2 }}>{footerNode}</Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
