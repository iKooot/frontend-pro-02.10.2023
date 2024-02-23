export const getDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#00dcdc",
            light: "#00f9f9",
          },
          secondary: {
            main: "#f500bb",
            light: "#f73cca",
          },
          background: {
            default: "#ffffff",
            paper: "#d8d8d8",
          },
          text: {
            primary: "rgba(18,18,18,0.87)",
            secondary: "rgba(26,26,26,0.6)",
          },
          divider: "rgba(80,80,80,0.12)",
          error: {
            main: "#f9450d",
          },
        }
      : {
          primary: {
            main: "#00dcdc",
            light: "#00f9f9",
          },
          secondary: {
            main: "#f500bb",
            light: "#f73cca",
          },
          background: {
            default: "#444444",
            paper: "#222222",
          },
          text: {
            primary: "rgba(230,228,228,0.87)",
            secondary: "rgba(177,177,177,0.6)",
            disabled: "rgba(105,104,104,0.5)",
          },
          divider: "rgba(80,80,80,0.12)",
          error: {
            main: "#f9450d",
          },
        }),
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 14,
    body1: {
      fontWeight: 500,
    },
  },
});
