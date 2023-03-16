import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {}
}
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}

export const theme = createTheme({
  typography: {
    body2: {
      fontWeight: 400,
      fontSize: "0.8125rem",
      color: "#8B96A5",
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            background: "#FFFFFF",
            color: "#1C1C1C",
            fontSize: "1rem",
            paddingY: "0.625rem",
            paddingX: "1rem",
            fontWeight: 500,
            textTransform: "none",
          },
        },
      ],
    },
  },
});
