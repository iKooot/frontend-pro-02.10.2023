import React from "react";
import {
  Footer,
  Header,
  PageLayout,
  LogInForm,
  ErrorMessage,
    FetchHoc
} from "../../components";
import style from "./LogIn.module.scss";
import { Link } from "react-router-dom";
import { useLogIn } from "../../hooks";

export function LogIn() {
  const { switcher, link, title, container, formContainer } = style;
  const { submitHandler, error, loading } = useLogIn();

  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
          <FetchHoc loading={loading}>
              <div className={container}>
                  <h1 className={title}>Log in</h1>
                  <div className={formContainer}>
                      <LogInForm onSubmit={submitHandler} />
                      {error && <ErrorMessage content={error}/>}
                      <div className={switcher}>
                          <p>New user?</p>
                          <Link to="/register" className={link}>
                              Register
                          </Link>
                      </div>
                  </div>
              </div>
          </FetchHoc>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
