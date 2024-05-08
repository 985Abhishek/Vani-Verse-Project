import React, { useState } from "react";
import * as Yup from "yup";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Button, IconButton, InputAdornment, Stack,  } from "@mui/material";
import { RHFtextfield } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import {useTheme} from "@mui/material/styles"

const RegisterForm = () => {
    const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  //loginShcema will define what type od data can be passes in login like for name a string
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("last name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be valid email address"),
    password: Yup.string().required("Pasword is required"),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "vaniverse.com",
    Password: "demo1234",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  const onSubmit = async (data) => {
    try {
      //submit data to backend
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        {/*passing conditional values to mui means we're rendering f.name+lastname in a 
single stack with half-half spacein column direction but  for other devices like 
mobile we are rendering a condition of size and direction   */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RHFtextfield name="firstName" label="First Name" />
          <RHFtextfield name="lasttName" label="Last Name" />
        </Stack>
        <RHFtextfield name="email" label="Email address" />
        <RHFtextfield
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      
      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
      Create Account
      </Button>
      </Stack>
    </FormProvider>
  );
};

export default RegisterForm;
