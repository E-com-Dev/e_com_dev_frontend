import React from "react";
import { Grid } from "@mui/material/";
import Product from "./Product";

type Props = {};

function Products({}: Props) {
  return (
    <>
      <Grid container sx={{ width: "100%" }}>
        {["1", "2", "3", "4", "5s", "1", "2", "3", "4", "5s"].map((item) => (
          <Grid key={item} item xs={2.4} p={1.25} sx={{ width: "100%" }}>
            <Product />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Products;
