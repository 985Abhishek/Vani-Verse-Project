import React, { useState } from 'react'
import {
    Box,
    Divider,
    IconButton,
    Link,
    Stack,
    Typography,
  } from "@mui/material";
import { Search, StyledInputBase } from '../../components/Search';
import SearchIconWrapper from '../../components/Search/SearchIconWrapper';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { useTheme} from "@mui/material/styles"
import { SimpleBarStyle } from '../../components/Scrollbar';
import { CallLogElement } from '../../components/CallElement';
import { CallLogs } from '../../data';
import StartCall from '../main/StartCall';


const Call = () => {
    const theme = useTheme();
    const [openDialog, setOpenDialog] = useState(false);

const handleCloseDialog =()=>{
  setOpenDialog(false);
}

  return (
    <>
     <Stack direction="row" sx={{ width: "100%" }}>
        {/* Left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "F8FAFF"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5">Calls</Typography>
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
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="subtitle2" component={Link}>
                Start Conversation
              </Typography>
              <IconButton onClick={()=>{
                 setOpenDialog(true)
              }}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            {/* have to overflowY ="scroll" for making a scrollbar  */}
            <Stack spacing={3}sx={{ flexGrow: 1,overflowY :"scroll", height: "100%" }} >
              <SimpleBarStyle timeout={500} clickonTrack={false}>
                <Stack spacing ={2.5}>
                
                  {/* Call Logs */}
                  {CallLogs.map((el) => <CallLogElement{...el} />)}
                  <CallLogElement online={true} />
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>
        {/* Right */}
      </Stack>
      { openDialog && < StartCall open ={openDialog} handleClose={handleCloseDialog}  />}
    </>
  )
}

export default Call