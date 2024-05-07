import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import AuthSocial from "./AuthSocial";

export const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography varaint="h4">Login to Vani-Verse</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography varaint="body2">New User?</Typography>
          <Link to="/auth/register"  varaint="subtitle2">
            Create an account
          </Link>
        </Stack>
        {/* Login from  */}
      <AuthSocial />
      </Stack>
    </>
  );
};
