import React from "react";
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
  VideoCamera,
} from "phosphor-react";
import { styled, useTheme } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const CallLogElement = ({ incoming, missed, Online }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",

          borderRadius: 1,

          backgroundColor: theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
            {" "}
            {Online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={faker.image.avatar()} />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              <Stack spacing={1} alignItems="center" direction={"row"}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Yesterday 21:24</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <IconButton>
              <Phone />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
const CallElement = (Online) => {
    const theme = useTheme(); 
  return (
    <>
      <Box
        sx={{
          width: "100%",

          borderRadius: 1,

          backgroundColor: theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
            {" "}
            {Online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={faker.image.avatar()} />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Stack direction={"row"} alignItems={"center"}>
            <IconButton>
              <Phone color="green" />
            </IconButton>
            <IconButton>
              <VideoCamera color="green" />
            </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export { CallElement, CallLogElement };
