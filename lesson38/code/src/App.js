import {
  CssBaseline,
  Typography,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useMemo, useState } from "react";
import { getDisignTokens } from "./services/matherial-theme";
import "@fontsource/montserrat";
import { ThemeToggleButton } from "./components/ThemeToggleButton";
import { MIUForm } from "./components/MIUForm";

export function App() {
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => createTheme(getDisignTokens(mode)), [mode]);
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main">
        <ThemeToggleButton mode={mode} toggleColorMode={toggleColorMode} />
        <Typography
          component="h1"
          variant="h1"
          align="center"
          gutterBottom={true}
          sx={{
            fontWeight: 700,
          }}
        >
          Hello MUI
        </Typography>
        <MIUForm />
      </Container>
    </ThemeProvider>
  );
}
