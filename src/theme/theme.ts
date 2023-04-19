import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // interface Theme {}
}
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}

export const theme = createTheme({
  typography: {
    body1: {
      fontSize: "1rem",
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            background: "#6A983C",
            color: "white",
            fontSize: "0.875rem",
            paddingY: "0.44rem",
            paddingX: "0.75rem",
            fontWeight: 700,
            textTransform: "none",
            border: "2px solid #46760A",
            borderRadius: "0.75rem",
            "&:hover": {
              background: "#6A983C",
              color: "white",
            },
          },
        },
      ],
    },
  },
});
