import React, { ReactNode } from "react";
import { Box, Stack, Paper, Divider } from "@mui/material/";
import Typography from "@mui/material/Typography";

type Props = {
  children?: ReactNode;
  title: string;
  callToAction: any;
  image?: string;
};

function Pannel({ children, title, callToAction, image }: Props) {
  return (
    <>
      <Box sx={{ px: { xs: 0.5, sm: 1, md: 1.25 }, width: "100%", py: 2.5 }}>
        <Paper sx={{ overflow: "hidden" }}>
          <Stack direction="row">
            <Box
              sx={{
                height: "257px",
                width: "280px",
                backgroundImage: `${image}`,
                backgroundSize: "cover",
                padding: "1.25rem",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    width: "8.125rem",
                    fontWeight: 600,
                    paddingBottom: "1.125rem",
                  }}
                  variant="body1"
                >
                  {title}
                </Typography>
                {callToAction}
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            {children}
          </Stack>
        </Paper>
      </Box>
    </>
  );
}

export default Pannel;
