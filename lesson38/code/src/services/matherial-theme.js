export const getDisignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode !== "light" ? {
      primary: {
        main: "#00dcd5",
      },
      secondary: {
        main: "#ed00f5",
      },
      background: {
        default: "#333333",
        paper: "#111111",
      },
      text: {
        primary: "rgba(255,255,255,0.87)",
        secondary: "rgba(239,239,239,0.6)",
      },
      divider: "rgba(26,26,26,0.12)",
    } : {
      primary: {
        main: "#00dcd5",
      },
      secondary: {
        main: "#ed00f5",
      },
      background: {
        default: "#ffffff",
        paper: "#e4e4e4",
      },
      text: {
        primary: "rgba(18,18,18,0.87)",
        secondary: "rgba(26,26,26,0.6)",
      },
      divider: "rgba(236,236,236,0.29)",
    }),
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 14,
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "bold",
    },
  },
  spacing: 4,
});
