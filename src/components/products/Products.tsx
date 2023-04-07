import React from "react";
import Product from "./Product";
import { Grid, Typography, Stack } from "@mui/material";

// type Props = {};

function Products() {
  return (
    <>
      <Stack
        justifyContent="space-between"
        flexDirection="row"
        sx={{ padding: "1rem" }}
      >
        <Typography variant="body1">Popular Items</Typography>
        <Typography variant="body1">See All</Typography>
      </Stack>
      <Grid container>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Grid key={item} item xs={3} sx={{ padding: "1rem" }}>
            <Product />
          </Grid>
        ))}
      </Grid>
      <Stack
        justifyContent="space-between"
        flexDirection="row"
        sx={{ paddingTop: "2rem", paddingX: "1rem" }}
      >
        <Typography variant="body1">Feeds</Typography>
        <Typography variant="body1">See All</Typography>
      </Stack>
      <Grid container>
        {[1, 2, 3, 4].map((item) => (
          <Grid key={item} item xs={3} sx={{ padding: "1rem" }}>
            <Product />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Products;
