import { Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const isAuthenticated = true;

const DashboardLayout = () => {
  // used for check which button is selected


  // done this to redirect new users to login page first
  if(!isAuthenticated) {
    return <Navigate to = "/auth/login" />;
  }


  return (
    <Stack direction="row">
      {/* Sidebar */}
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
