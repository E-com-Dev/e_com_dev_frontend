import React from "react";
import { Grid } from "@mui/material/";
import Product from "./Product";
import Typography from "@mui/material/Typography";

type Props = {};

function Products({}: Props) {
  return (
    <>
      <Typography
        sx={{
          p: { xs: 0.5, sm: 1, md: 1.25 },
          fontSize: { xs: "1.125rem", md: "1.5rem" },
        }}
        variant="h5"
      >
        Recommended Products
      </Typography>
      <Grid container sx={{ width: "100%" }}>
        {["1", "2", "3", "4", "5s", "1", "2", "3", "4", "5s"].map((item) => (
          <Grid
            key={item}
            item
            xs={6}
            sm={4}
            md={3}
            lg={2.4}
            sx={{ width: "100%", p: { xs: 0.5, sm: 1, md: 1.25 } }}
          >
            <Product />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Products;
