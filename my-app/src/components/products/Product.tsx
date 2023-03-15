import { Box, Paper, Typography } from "@mui/material";

type Props = {};

function Product({}: Props) {
  return (
    <Paper sx={{ width: "100%" }}>
      <Box
        sx={{ px: { xs: "0.65rem", md: 1.2 }, py: { xs: "0.66rem", md: 1 } }}
      >
        <Box
          sx={{
            paddingX: { xs: "1.11rem", md: "1.5rem" },
            paddingY: { xs: "0.65rem", md: "0.875rem" },
            position: "relative",
          }}
        >
          <img
            src=""
            alt=""
            width={150}
            height={170}
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box
          maxWidth={186}
          sx={{ px: { xs: 0, md: 1.2 }, pt: { xs: "0.815em", md: 1.75 } }}
        >
          <Typography variant="body1" fontWeight={500} pb={0.4}>
            $10.99
          </Typography>
          <Typography variant="body1" sx={{ color: "#8B96A5" }}>
            T-shirts with multiple colors, for men
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default Product;
