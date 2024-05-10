import React from 'react'
import {
    
    Dialog,
    DialogContent,
    DialogTitle,
    Slide,
    Stack,
  } from "@mui/material";
import { Search, StyledInputBase } from '../../components/Search';
import SearchIconWrapper from '../../components/Search/SearchIconWrapper';
import { MagnifyingGlass } from 'phosphor-react';
import { CallElement } from '../../components/CallElement';
import { MembersList } from '../../data';


  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const StartCall = ({id, Online,open, handleClose}) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      sx={{ p: 4 }}
      
    >
        <DialogTitle sx ={{mb:3}}>Start Call</DialogTitle>
        <DialogContent>
        <Stack spacing={3}>
  {/* <Call handleClose={handleClose}/> */}
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
        </Stack>
  
      
            {/* call List */}
            {MembersList.map((el)=><CallElement {...el} />)}
            
      </DialogContent>
    </Dialog>
  )
}

export default StartCall