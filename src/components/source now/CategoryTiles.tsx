import React from "react";
import { Box } from "@mui/material/";
import Tile from "./Tile";
type Props = {};

function CategoryTiles({}: Props) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "repeat(2,1fr)",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "1px",
        flex: 1,
        background: "#E0E0E0",
      }}
    >
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </Box>
  );
}

export default CategoryTiles;
