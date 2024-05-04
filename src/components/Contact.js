import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { faker } from "@faker-js/faker";
import {
  Bell,
  CaretCircleRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { ToggleSidebar, UpdateSidebarType} from "../redux/slices/app";
import AntSwitch from "./AntSwitch";

const Contact = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info </Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              < X />
            </IconButton>
          </Stack>
        </Box>
        {/* body */}
        <Stack
          sx={{
            height: "100%",
            position: "relaitve",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 64 }}
            ></Avatar>
            <Stack spacing={0.5}>
              <Typography variant="body2" fontWeight={600}>
                {" "}
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {" "}
                {"+91 729 2829 2992"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">
              imagination is the only limit
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media Links & Docs</Typography>
            <Button
              onClick={() => {
                dispatch(UpdateSidebarType("SHARED"));
              }}
              endIcon={<CaretCircleRight />}> 
            
              401
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            {[1, 2, 3].map((el) => (
              <Box>
                <img src={faker.image.food()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {" "}
            <Stack spacing={2} direction={"row"} alignItems={"center"}>
              <Star size={21} />
              <Typography variant="subtile2">Starred Messages</Typography>
            </Stack>
            <IconButton
             onClick={() => {
                dispatch(UpdateSidebarType("STARRED"));
              }}>
             
              <CaretCircleRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {" "}
            <Stack spacing={2} direction={"row"} alignItems={"center"}>
              <Bell size={21} />
              <Typography variant="subtile2">Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">Shree Radhe</Typography>
              <Typography variant="caption">Me, Khushi, Papa, Mummy</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Button startIcon={<Prohibit />} fullWidth varaint="outlined">
              Block
            </Button>
            <Button startIcon={<Trash />} fullWidth varaint="outlined">
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
