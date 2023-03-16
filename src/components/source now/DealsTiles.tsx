import React from "react";
import {
  Grid,
  CardActionArea,
  Typography,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

type Props = {};

function DealsTiles({}: Props) {
  return (
    <Grid container sx={{ width: "100%" }}>
      {[1, 2, 3, 4, 5].map((item) => (
        <Grid
          item
          xs={2.4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Divider orientation="vertical" />
          <CardActionArea
            sx={{
              background: "white",
              height: "100%",
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src="/cloths/6.png"
                alt=""
                style={{ width: "6.25rem", height: "7.5rem" }}
              />
              <Typography sx={{ pt: 2.5 }} variant="body1">
                Head Phones
              </Typography>
              <Chip label="-25%" sx={{ margin: ".5rem", px: 0.5 }} />
            </Stack>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
}

export default DealsTiles;
