import React from "react";
import { Footer, Header, PageLayout, UserCard } from "../../components";
import {useLoaderData, useRouteLoaderData} from "react-router-dom";

export function UserPage() {
  const user = useLoaderData();
  const data = useRouteLoaderData('root');
  console.log(user)
  console.log(data)
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
      renderContent={() => <UserCard />}
    />
  );
}
