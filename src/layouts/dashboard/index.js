import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/Images/logo.ico"; //from nowonwards import images things without curly braces it'll not work
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { useState } from "react";
import { faker } from "@faker-js/faker";

import useSettings from "../../hooks/useSettings";


const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme);
  // used for check which button is selected
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  return (
    <Stack direction ="row">
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
          allignItems={"center"}
          sx={{ width: "100%" }}
          spacing={3}
        >
          <Stack allignitems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={logo} alt={"chat logo"} />
            </Box>
            <Stack
              // sx={{ width: "max-content" }}
              direction={"column"}
              allignitems={"center"}
              justifycontent="space-between"
              sx={{ height: "100%" }}
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
                    }}
                    sx={{ width: "max-content", color: "#000" }}
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
                  <IconButton sx={{ width: "max-content",color:theme.palette.mode==="light"? "#fff":theme.palette.text.primary }}
                >
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(3);
                  }}
                  sx={{ width: "max-content", color:theme.palette.mode==="light"? "#000":theme.palette.text.primary }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Stack spacing={35}>
            <Avatar src={faker.image.avatar()} />
            <Switch
              onChange=
              {() => {
                onToggleMode();
              }}
              defaultChecked
            />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
