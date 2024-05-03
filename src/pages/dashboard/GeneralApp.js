import React from "react";
import ChatFile from "./ChatFile";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import SharedMessages from "../../components/SharedMessages";
 

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
        {/* conversation */}
        <Conversation />
      </Box>
      {/* Contact */}
            {/* using an iife for opening sharedmessage, contact and starred messages */}
      {sidebar.open && ( ()=>{
switch (sidebar.type) {
  case "CONTACT":
    return <Contact />

  case "STARRED":
  break;

  case "SHARED":
    return <SharedMessages />
    
    

  default:
    break;
}
      })()}
    </Stack>
  );
};
 

export default GeneralApp;
