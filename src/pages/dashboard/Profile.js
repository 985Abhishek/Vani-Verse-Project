import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import ProfileForm from "../../sections/ProfileForm";

const Profile = () => {
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "F8FAFF"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack spacing={5} p={4}>
            {/* Header */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} color={"#4B4B4B"}></CaretLeft>
              </IconButton>

              <Typography variant="h5">Profile</Typography>
            </Stack>
            {/* Profile Form */}
            <ProfileForm />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
