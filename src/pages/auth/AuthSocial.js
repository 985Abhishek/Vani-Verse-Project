import { Divider, IconButton } from "@mui/material";
import { GithubLogo, GoogleLogo, GooglePlayLogo, Stack, TwitchLogo, TwitterLogo } from "phosphor-react";
import React from "react";

const AuthSocial = () => {
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before,::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>
      <Stack direction={"row"} justifyContent="center" spacing={2}>
        <IconButton>
          <GooglePlayLogo />
        </IconButton>
        <IconButton>
          <GithubLogo />
        </IconButton>
        <IconButton>
          <TwitterLogo />
        </IconButton>
      </Stack>
    </div>
  );
};

export default AuthSocial;
