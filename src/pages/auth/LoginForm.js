import React, { useState } from "react";
import * as Yup from "yup";
import {Link as RouterLink} from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { Stack } from "@mui/system";
import { Alert, Button, IconButton, InputAdornment, Link } from "@mui/material";
import { RHFtextfield } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import {useTheme} from '@mui/material/styles'
import { LoginUser } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  //loginShcema will define what type od data can be passes in login like for name a string
    const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be valid email address"),
    password: Yup.string().required("Pasword is required"),
  });

  const defaultValues = {
    email: "demotawk.com",
    Password: "demo1234",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
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

      dispatch(LoginUser(data));
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

        <RHFtextfield name="Email" label="Email address"></RHFtextfield>
        <RHFtextfield
          name="passwrod"
          label="password"
          type={showPassword ? "text" : "password"}
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
      </Stack>
      <Stack alignItems={"flex-end"} sx={{ my: 2 }}>
        <Link component={RouterLink} to="/auth/reset-password" variant="body2" color={"inherit"} underline="always">
          Forget Password?
        </Link>
      </Stack>
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
      Login
      </Button>
    </FormProvider>
  );
};

export default LoginForm;
