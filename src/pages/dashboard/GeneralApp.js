import React from "react";
import ChatFile from "./ChatFile";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

    return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <ChatFile />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          // "1300px", // khud se di
          backgroundColor:
            theme.palette.mode === "Light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        <Conversation />
      </Box>
      {/* Contact */}
      {sidebar.open && <Contact />}
    </Stack>
  );
};

export default GeneralApp;
