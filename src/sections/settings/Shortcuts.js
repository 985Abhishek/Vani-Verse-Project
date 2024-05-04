import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { Bell, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from "phosphor-react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const list = [
  {
    key: 0,
    icon: <Bell size={20} />,
    title: "Notifications",
    onclick: () => {},
  },
  {
    key: 1,
    icon: <Lock size={20} />,
    title: "Privacy",
    onclick: () => {},
  },
  {
    key: 2,
    icon: <Key size={20} />,
    title: "Security",
    onclick: () => {},
  },
  {
    key: 3,
    icon: <PencilCircle size={20} />,
    title: "Theme",
    onclick: () => {},
  },
  {
    key: 4,
    icon: <Image size={20} />,
    title: "Chat Wallpaper",
    onclick: () => {},
  },
  {
    key: 5,
    icon: <Note size={20} />,
    title: "Request Account Info",
    onclick: () => {},
  },

  {
    key: 6,
    icon: <Keyboard size={20} />,
    title: "Keyboard Shortcuts",
    onclick: ()=>{},
  },
  {
    key: 7,
    icon: <Info size={20} />,
    title: "Help",
    onclick: () => {},
  },
];

const Shortcuts = ({ open, handleclose }) => {
  return (
    <>
      <Dialog
        fullwidth
        maxWidth="md"
        open={open}
        onClose={handleclose}
        keepMounted
        TransitionComponent={Transition}
        sx={{ p: 4 }}
      >
        <DialogTitle>Keyboard Shortcuts</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {list.map(({ key, title, combination }) => (
              <Grid key={key} container item sx={6}>
                <Stack
                  sx={{ width: "100%" }}
                  justifyContent="space-between"
                  spacing={3}
                  direction="row"
                  alignItems={"center"}
                >
                  <Typography variant="caption" sx={{ fontSize: 14 }}>
                    {title}
                  </Typography>
                  <Stack spacing={2} direction={"row"}>
                    {combination.map((el) => {
                      return (
                        <Button
                          disabled
                          variant="contained"
                          sx={{ color: "#212121" }}
                        >
                          {el}
                        </Button>
                      );
                    })}
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions varaint="container" onClick={handleclose}>
          Ok
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Shortcuts;
