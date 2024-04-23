import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
  Badge,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { ChatList } from "../../data";

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
// this is for the chat and palced right below the archive here we'll add boxes that will represent each user
const ChatElement = ({id, name, img, msg, time, unread, online}) => {
  return (
    <Box
      sx={{
        width: "95%", // adjust the width as needed<StyledBadge

        margin: "0 auto",
        height: 60,
        borderRadius: 1,
        backgroundColor: "#90caf9",
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignitems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {online ?
           <StyledBadge
           overlap="circular"
           anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
           variant="dot"
         >
           <Avatar src={faker.image.avatar()}></Avatar>
         </StyledBadge> : <Avatar src={faker.image.avatar()}></Avatar>}
         
          <Stack spacing={-0.5} sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="subtitles2">{name}</Typography>
            <Typography variant="caption" marginBottom="1 auto">
              {msg}
            </Typography>
          </Stack>
          <Stack>
            <Stack spacing={2} left="100%" sx={{ ml: "86px" }}>
              <Typography
                sx={{ fontWeight: 600, mr: "80px" }}
                variant="caption"
              >
              {time}
              </Typography>
              <Badge color="primary" badgeContent={unread}></Badge>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
}));
// hepl us to place the search icon
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignitems: "center",
  justifycontent: "center",
}));
// to write in the search icon
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const ChatFile = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: "100px",
        height: "100vh",
        width: "350px",
        backgroundColor: "Grey",
        boxShadow: "0px, 0px, 0px rgba(0, 0, 0,3.25)",
      }}
    >
      <Stack p={2} spacing={2}sx = {{height: "100vh",}}>
        <Stack
          direction="row"
          alignitems={"center"}
          justifyContent="space-between"
        >
          <Typography varient="h5" sx={{ paddingLeft: "16px" }}>
            Shree Radhe
          </Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="red" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Shree Radhe..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
      </Stack>
      <Stack spacing={1}>
        <Stack direction="row" alignItems={"center"} spacing={1.5}>
          <ArchiveBox size={24} />
          <Button> Archive</Button>
        </Stack>

        <Divider />
      </Stack>
      <Stack direction="column" sx={{flexGrow :1, overflow: "scroll", height:"100%"}}>
        <Stack spacing={2.4}>
          <Typography variant="subtitle2" sx={{ color: "#0d47a1" }}>
            <b>Pinned</b>
          </Typography>
          {ChatList.filter((el) => el.pinned).map((el) => {
           return <ChatElement {...el}/>;
          })}
        </Stack>
        <Stack spacing={2.4}>
          <Typography variant="subtitle2" sx={{ color: "#0d47a1" }}>
            <b>All chats</b>
          </Typography>
          {ChatList.filter((el) => !el.pinned).map((el) => {
           return <ChatElement {...el}/>;
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatFile;

