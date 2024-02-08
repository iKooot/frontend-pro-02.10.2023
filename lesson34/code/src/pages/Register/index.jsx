import React from "react";
import {
    ErrorMessage, FetchHoc,
    Footer,
    Header,
    PageLayout,
    RegisterForm,
} from "../../components";
import style from "./Register.module.scss";
import { Link } from "react-router-dom";
import { useRegistration } from "../../hooks";

export function Register() {
  const { switcher, link, title, container, formContainer } = style;
  const { submitHandler, error, loading } = useRegistration();

  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
          <FetchHoc loading={loading}>
              <div className={container}>
                  <h1 className={title}>Register</h1>
                  <div className={formContainer}>
                      <RegisterForm onSubmit={submitHandler} />
                      {error && <ErrorMessage content={error}/>}
                      <div className={switcher}>
                          <p>Try log in?</p>
                          <Link to="/login" className={link}>
                              Log in
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
