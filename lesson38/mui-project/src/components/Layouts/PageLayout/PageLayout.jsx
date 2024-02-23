import React from "react";
import { Box, Container } from "@mui/material";

export function PageLayout({
  renderHeader = () => null,
  renderContent = () => null,
  renderFooter = () => null,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box>{renderHeader()}</Box>
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        {renderContent()}
      </Container>
      <Box
        component="footer"
        sx={{
          marginTop: "auto",
          backgroundColor: "background.paper",
        }}
      >
        {renderFooter()}
      </Box>
    </Box>
  );
}
