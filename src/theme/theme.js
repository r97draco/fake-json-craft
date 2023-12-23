import { createTheme } from "@mui/material";

export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#1C5E3A",
    },
    secondary: {
      main: "#164B30",
    },
    background: {
      default: "#FFF",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#689f38",
        color: "#fff",
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
  },
};

export const theme = createTheme(themeOptions); 