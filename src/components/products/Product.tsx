import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

// type Props = {};
// {}: Props

function Product() {
  return (
    <Card>
      <CardActionArea
        sx={{
          padding: "0.625rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CardMedia
          image="/cloths/1.png"
          component="img"
          alt=""
          sx={{
            padding: "0.625rem",
            height: { xs: "9rem", sm: "10.5rem", md: "12.5rem" },
            width: { xs: "9rem", sm: "10.5rem", md: "12.5rem" },
          }}
        />
        <CardContent sx={{ paddingTop: { xs: "1rem" }, px: 0 }}>
          <Typography fontWeight={500} variant="body1">
            $10.99
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.8125rem", sm: "1rem" },
              pt: 0.5,
            }}
          >
            T-shirts with multiple colors, for men
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Product;
