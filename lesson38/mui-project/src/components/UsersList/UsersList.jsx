import React from "react";
import { useFetchUsers } from "../../hooks";
import { UserItem } from "./UserItem";
import { Box, Grid } from "@mui/material";
import { ErrorMessage, Loader } from "../UI";
export function UserList() {
  const { status, error, users } = useFetchUsers();

  if (status === "loading") return <Loader />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {users.map((user) => (
          <Grid item xs={2} sm={4} md={4} key={user.id}>
            <UserItem key={user.id} user={user} />
          </Grid>
        ))}
      </Grid>
      {error && <ErrorMessage content={error} />}
    </Box>
  );
}
