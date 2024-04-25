import React from "react";
import ChatFile from "./ChatFile";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";

const GeneralApp = () => {
  return (
    <Stack direction={"row"} sc={{ width: "auto" }}>
     <ChatFile />
      <Box
        sx={{
          top :0,
          height: "100px",
          width: "calc(100vw-200px)",
          backgroundColor: "#fff",
        }}
       >  <Conversation />
       
       
      </Box>
    </Stack>
    
  );
};

export default GeneralApp;
