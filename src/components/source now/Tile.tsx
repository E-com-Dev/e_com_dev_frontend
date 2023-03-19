import React from "react";
import { Box, Stack, CardActionArea } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

type Props = {};

function Tile({}: Props) {
  return (
    <CardActionArea
      sx={{ background: "white", paddingLeft: "1rem", paddingTop: "1.25rem" }}
    >
      <Typography variant="body1">Smart Watches</Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body2">
          From <br /> USD 99
        </Typography>
        <img
          src="/cloths/4.png"
          alt=""
          style={{ width: "78px", height: "78px" }}
        />
      </Stack>
    </CardActionArea>
  );
}

export default Tile;
