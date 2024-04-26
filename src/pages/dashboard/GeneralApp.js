import React from "react";
import ChatFile from "./ChatFile";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";

const GeneralApp = () => {
  const theme=useTheme();
  return (
    <Stack direction={"row"} sc={{ width: "100%" }}>
      <ChatFile />
      <Box
        sx={{
          height: "100%",
          width: "1300px", // khud se di
          backgroundColor:
            theme.palette.mode === "Light"
              ? "#fff"
              : theme.palette.background.default,
        }}
      >
        {" "}
        <Conversation />
        <Typography>Shree Radhe</Typography>
      </Box>
    </Stack>
  );
};

export default GeneralApp;
