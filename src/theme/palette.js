import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

// Gold palette
const PRIMARY = {
  lighter: "#FFF5E0",
  light: "#FFD700", // Bright gold
  main: "#D4AF37", // Classic gold
  dark: "#B8860B", // Dark gold
  darker: "#996515", // Deep gold
};

// White/grey palette for secondary
const SECONDARY = {
  lighter: "#FFFFFF",
  light: "#FAFAFA",
  main: "#F5F5F5",
  dark: "#E0E0E0",
  darker: "#CCCCCC",
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const palette = {
  common: { black: "#000000", white: "#FFFFFF" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: "rgba(212, 175, 55, 0.12)",
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#FFFFFF",
    default: "#FAFAFA",
    neutral: "#F5F5F5",
  },
  action: {
    active: PRIMARY.main,
    hover: PRIMARY.lighter,
    selected: PRIMARY.light,
    disabled: GREY[500],
    disabledBackground: GREY[200],
    focus: PRIMARY.light,
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
