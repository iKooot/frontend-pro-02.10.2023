import React from "react";
import { Footer, Header, PageLayout, UserCard } from "../../components";

export function UserPage() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
      renderContent={() => <UserCard />}
    />
  );
}
