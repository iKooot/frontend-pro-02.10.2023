import React from "react";
import {
  ErrorMessage,
  Footer,
  Header,
  PageLayout,
  SignUpForm,
} from "../../components";
import { useRegistration } from "../../hooks";
import { Box, Typography } from "@mui/material";
import { clearAuth } from "../../ducks/auth.duck";
import { useDispatch } from "react-redux";

export function Register() {
  const { submitHandler, error, status } = useRegistration();
  const dispatch = useDispatch();

  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box>
          <Typography variant="h2" component="h1" align="center">
            Sign up
          </Typography>
          <Box>
            <SignUpForm
              loading={status === "loading"}
              onSubmitHandler={submitHandler}
            />
            {error && (
              <ErrorMessage
                content={error}
                onCloseCallback={() => dispatch(clearAuth())}
              />
            )}
          </Box>
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
