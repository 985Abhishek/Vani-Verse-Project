import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  Badge,
} from "@mui/material";
import SimpleBarStyle from "simplebar-react";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";

import { ChatList } from "../../data";
import { Search, StyledInputBase } from "../../components/Search";
import SearchIconWrapper from "../../components/Search/SearchIconWrapper";
import ChatElement from "../../components/ChatElement";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "150%",
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
// this is for the chat and placed right below the archive here we'll add boxes that will represent each user

// just a container for search bar <Search>

// hepl us to place the search icon<SearchIconWrapper>

// marginRight: theme.spacing(1),<StyledInputBase>

// to write in the search icon

const ChatFile = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        // top:0,
        // to join side bar with chatfile earlier there is gap between both of them but now after putting it as 0 spacing is gone
        width: "320",
        backgroundColor:
          theme.palette.mode === "Light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px, 0px, 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Typography varient="h5">Shree Radhe "chats"</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Shree Radhe..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction="row" alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button> Archive</Button>
          </Stack>
          <Divider />
        </Stack>

        {/* ise uper wali stack ko niche band karna hae */}

        <Stack
          spacing={2}
          direction="column"
          sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
        >
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>

            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                All Chats
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatFile;
