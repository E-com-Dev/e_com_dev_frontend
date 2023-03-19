import React from "react";
import {
  Button,
  Stack,
  Box,
  Typography,
  //   CardContent,
  //   CardActionArea,
  //   CardMedia,
  Card,
} from "@mui/material";

type Props = {};

function Product({}: Props) {
  return (
    <Card>
      <Box sx={{ padding: "1rem" }}>
        <Box
          sx={{
            width: "100%",
            height: "11.25rem",
            borderRadius: "0.75rem",
            background: "url(/cloths/1.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "Center",
            marginX: "auto",
            marginBottom: "1rem",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              background: "red",
              bottom: "0.75rem",
              left: "0.75rem",
              height: "24px",
              width: 24,
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box sx={{ padding: 0 }}>
          <Typography variant="body1">Product title</Typography>
          <Typography variant="caption" sx={{ paddingTop: "0.25rem" }}>
            Space for a small product description
          </Typography>
          <Stack direction="row" justifyContent="space-between" pt={2}>
            <Typography variant="h6">N10,000</Typography>
            <Box>
              <Button variant="primary">Buy Now</Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}

export default Product;
