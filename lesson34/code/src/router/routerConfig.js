import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage } from "../pages";

const routerConfig = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    id: "root",
    loader: async ({ request }) => {
      const resp = await fetch(`https://reqres.in/api/users`, {
        signal: request.signal,
      });

      const { data } = await resp.json();

      return data;
    },
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        children: [
          {
            index: true,
            async lazy() {
              const { LogIn } = await import("../pages/LogIn/index");

              return { Component: LogIn };
            },
          },
        ],
      },
      {
        path: "register",
        children: [
          {
            index: true,
            async lazy() {
              const { Register } = await import("../pages/Register/index");

              return { Component: Register };
            },
          },
        ],
      },
      {
        path: "user/:id",
        children: [
          {
            index: true,
            loader: async ({ request, params }) => {
              const resp = await fetch(
                `https://reqres.in/api/user/${params.id}`,
                { signal: request.signal },
              );

              const { data } = await resp.json();

              return data;
            },
            async lazy() {
              const { UserPage } = await import("../pages/User/index");

              return { Component: UserPage };
            },
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
