import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import RegisterForm from "./RegisterForm";
import AuthSocial from "./AuthSocial";

const Register = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Get Started with Vani-Verse</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography>Already have an account?</Typography>
          <Link component={RouterLink} to="/auth/login" variant="subtitles2">
            Sign in
          </Link>
        </Stack>
        {/* registerform */}
        <RegisterForm />
        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}
        >
          {"By signining up, I agree to "}
          <Link underline="always" color={"text.primary"}>
            Terms of service
          </Link>
          <Link underline="always" color={"text.primary"}>
            Privacy Policy
          </Link>
          {" and "}
          <Link underline="always" color={"text.primary"}>
            Terms of service
          </Link>
        </Typography>
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Register;
