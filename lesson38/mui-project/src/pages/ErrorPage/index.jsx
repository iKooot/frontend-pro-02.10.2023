import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Footer, Header, PageLayout } from "../../components";

export function ErrorPage() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
      renderContent={() => (
        <Container>
          <Box
            sx={{
              textAlign: "center",
              mt: 8,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography variant="h1">Oops!</Typography>
            <Typography
              variant="h2"
              sx={(theme) => ({ color: theme.palette.primary.main })}
            >
              404
            </Typography>
            <Typography variant="body1">
              Sorry, an unexpected error has occurred.
            </Typography>
          </Box>
        </Container>
      )}
    />
  );
}
