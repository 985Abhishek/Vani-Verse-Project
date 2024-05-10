import React, { useCallback } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RHFtextfield } from "../components/hook-form";
import { Alert, Button, Stack } from "@mui/material";
import FormProvider from "../components/hook-form/FormProvider";

const ProfileForm = () => {
  //loginShcema will define what type od data can be passes in login like for name a string
  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),

    avatarUrl: Yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  //   to pick up the image for avatar
  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = async (data) => {
    try {
      //submit data to backend
      console.log("Data", data);
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
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}

          <RHFtextfield
            name="name"
            label="Name"
            helperText={"This name is visible to contacts"}
          ></RHFtextfield>
          <RHFtextfield
            multiline
            rows={4}
            maxRows={5}
            name="about"
            label="About"
          ></RHFtextfield>
        </Stack>
        <Stack direction="row" justifyContent={"end"}>
          <Button color="primary" size="large" type="submit" variant="outlined">
            Submit
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
