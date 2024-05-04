import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import { useTheme } from '@mui/material/styles'

const Conversation = () => {
  const theme =useTheme()
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"100%"}>
      {/* Chat Header */}
      <Header />

      {/* Chat Msg Section */}
      <Box width={"100%"} sx={{ flexGrow: 1, height:"100%", overflowY: "scroll" }}>
        <Message menu ={true} />
      </Box>

      {/* chat footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
