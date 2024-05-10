import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import { Nav_Buttons, Profile_Menu } from "../../data";
import useSettings from "../../hooks/useSettings";
import { faker } from "@faker-js/faker";
import AntSwitch from "../../components/AntSwitch";
import Logo from "../../assets/Images/logo.ico";
import { useNavigate } from "react-router-dom";

const getPath =(index) => {
  switch (index) {
    case 0:
      return "/app"

    case 1:
      return "/group"

    case 2:
      return "/call"

    case 3:
      return "/settings"
      
     
  
    default:
      break;
  }
}

const getMenuPath = (index) =>{
switch (index) {

  case 0:
    return "/profile";

  case 1:
    return "/settings";

  case 2:
    return "/auth/login";
    

  default:
    break;
}
} 
const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  const [anchorEl, setAnchorEl] = React.useState();
  const open = Boolean(anchorEl);
  // here i'ev used an if state because earlier when im clicking on avatar menu it seems to move with each click to positon tht i used this 
  const handleClick = (event) => {
    if (!open) {
    setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction="column"
        alignItems={"center"}
        justifyContent="space-bwtween"
        sx={{ height: "100%" }}
        spacing={3}
      >
        <Stack alignItems={"center"} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={Logo} alt={"chat logo"} />
          </Box>
          <Stack
            sx={{ width: "max-content" }}
            direction={"column"}
            alignItems={"center"}
            // justifyContent="space-between"
            // sx={{ height: "100%" }}
            spacing={3}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  p={1} // did it to allign the other button right below the logo in center
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{ width: "max-content", color: "#fff" }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index);
                    navigate(getPath(el.index));
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: "48px" }} />
            {selected === 3 ? (
              <Box
                p={1} // did it to allign the other button right below the logo in center
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  sx={{
                    width: "max-content",
                    color: "#fff",
                  }}
                >
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  navigate(getPath(3));
                  setSelected(3);
                }}
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack spacing={32}>
          <AntSwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar id="basic-button" 
           aria-controls={open ? "basic-menu" : undefined}
           aria-haspopup="true"
           aria-expanded={open ? "true" : undefined}
           onClick={handleClick} src={faker.image.avatar()} />

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            // this is done to not hide the avatar when it is clicked and menu appear with this themenu appears to be on right rather than overlappping the avatar itself
            anchorOrigin={{
              vertical:"bottom",
              horizontal:"right",
            }}
            transformOrigin={{
              vertical:"bottom",
              horizontal:"left",
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el, idx) => (
                <MenuItem onClick={ ()=>{
                  handleClick();
                  navigate(getMenuPath (idx));
                }}>
                  <stack
                    sx={{ width: 100 }}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <span>{el.title}</span>
                  </stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;