import React, { useState } from "react";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { Stack } from "@mui/system";
import { Alert, Button, IconButton, InputAdornment, Link } from "@mui/material";
import { RHFtextfield } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import { useTheme } from "@mui/material/styles";

const NewpasswordForm = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  //loginShcema will define what type od data can be passes in login like for name a string
  const NewPasswordSchema = Yup.object().shape({
    newpassword: Yup.string()
      .min(6, "Password must be atleast 6 charactors")
      .required("Pasword is required"),
    confirmpassword: Yup.string()
      .required("Pasword is required")
      .oneOf([Yup.ref("newPassword"), null], "Password must match"),
    //oneOF is used to match confirm password new password
  });

  const defaultValues = {
    email: "",
    Password: "",
  };

  const methods = useForm({
    resolver: yupResolver(NewPasswordSchema),
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

        <RHFtextfield
          name="newPasswrod"
          label="New Password"
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

        <RHFtextfield
          name="confirmPasswrod"
          label="Confirm Password"
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
        Submit
      </Button>
      </Stack>

     
    </FormProvider>
  );
};

export default NewpasswordForm;
