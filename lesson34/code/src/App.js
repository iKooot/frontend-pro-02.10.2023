import React from "react";
import { PageLayout, Header, UserList, Footer } from "./components";
export function App() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => <UserList />}
      renderFooter={() => <Footer />}
    />
  );
}
