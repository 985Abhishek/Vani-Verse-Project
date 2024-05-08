import { Link, Stack, Typography } from "@mui/material";
import {Link as RouterLink} from "react-router-dom"
import React from "react";
import { CaretLeft } from "phosphor-react";
import NewpasswordForm from "./NewpasswordForm";

 const NewPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Reset Password
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please set your new password
        </Typography>
      </Stack>
      {/* NewpasswordForm */}
      <NewpasswordForm />
      <Link
          component={RouterLink}
          to="/auth/login"
          color="inherit"
          variant="subtitle2"
          sx={{
            mt: 3,
            mx: "auto",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
            <CaretLeft />
            Return to Sign in page 
        </Link> 
    </>
  );
};
export default NewPassword;
// solution to "Element type is invalid recieved a proise that resolves to undefined"
// solution change that particular file to export default forexample in this 
//earlier it was export const NewPassword  and we changed it to export default NewPassword; 
