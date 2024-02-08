import React from "react";
import { Footer, Header, PageLayout, UserList } from "../../components";

export function HomePage() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => <UserList />}
      renderFooter={() => <Footer />}
    />
  );
}
