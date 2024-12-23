// ----------------------------------------------------------------------

export default function Typography(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          letterSpacing: "0.1em",
        },
        h2: {
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          letterSpacing: "0.05em",
        },
        h3: {
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
        },
        h4: {
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
        },
        h5: {
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
        },
        h6: {
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
        },
        subtitle1: {
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
        },
        subtitle2: {
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
        },
        body1: {
          fontFamily: "'Montserrat', sans-serif",
          lineHeight: 1.8,
        },
        body2: {
          fontFamily: "'Montserrat', sans-serif",
          lineHeight: 1.6,
        },
        button: {
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
        },
      },
    },
  };
}
