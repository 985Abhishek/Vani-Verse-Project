import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import {Link as RouterLink} from "react-router-dom"
import AuthSocial from "./AuthSocial";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Login to Vani-Verse</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New User?</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Create an account
          </Link>
        </Stack>
        {/* loginform */}
        <LoginForm />
        {/* <Auth social */}
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
