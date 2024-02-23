import React from "react";
import {
  Footer,
  Header,
  PageLayout,
  SignInForm,
  ErrorMessage,
} from "../../components";
import { useSignIn } from "../../hooks";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearAuth } from "../../ducks/auth.duck";

export function LogIn() {
  const { submitHandler, error, status } = useSignIn();
  const dispatch = useDispatch();

  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box>
          <Typography variant="h2" component="h1" align="center">
            Sign in
          </Typography>
          <Box>
            <SignInForm
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
