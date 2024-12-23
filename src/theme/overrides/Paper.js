// ----------------------------------------------------------------------

export default function Paper(theme) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: theme.palette.background.paper,
          borderRadius: 8,
          border: `1px solid ${theme.palette.divider}`,
          "&.MuiPaper-elevation": {
            boxShadow: `0 0 15px ${theme.palette.primary.main}15`,
          },
        },
      },
    },
  };
}
