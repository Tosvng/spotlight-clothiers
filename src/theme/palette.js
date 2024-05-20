import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS
// const GREY = {
//   0: "#FFFFFF",
//   100: "#E5E4E4",
//   200: "#CAC9C9",
//   300: "#B1ADAD",
//   400: "#979191",
//   500: "#7E7575",
//   600: "#635B5B",
//   700: "#484141",
//   800: "#2C2727",
//   900: "#100E0E",
// };

const GREY = {
  900: "#FFFFFF",
  800: "#E5E4E4",
  700: "#CAC9C9",
  600: "#B1ADAD",
  500: "#979191",
  400: "#7E7575",
  300: "#635B5B",
  200: "#484141",
  100: "#2C2727",
  0: "#100E0E",
};

const PRIMARY = {
  lighter: "#C7AC5C",
  light: "#AF9752",
  main: "#978348",
  dark: "#806F3E",
  darker: "#6A5C35",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: GREY[800],
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
  common: { black: "#313131", white: "#ebebeb" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    success: SUCCESS.dark,
    disabled: GREY[500],
    // contrast: GREY[200],
    contrast: GREY[800],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[100],
    hover: alpha(GREY[300], 0.8),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
