import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { RHFtextfield } from "../../components/hook-form";
import RHFAutoComplete from "../../components/hook-form/RHFAutoComplete";

const MEMBERS = ["Name 1", "Name 2", "Name 3"];

//todo=> create a reusable component
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),

    members: Yup.array().min(2, "Must have at least 2 members"),
  });

  const defaultValues = {
    title: "",

    tags: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //  API Call
      console.log("DATA", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFtextfield name="title" label="Title" />
        <RHFAutoComplete
          name="members"
          label="Members"
          multilple
          freeSolo
          options={MEMBERS.map((option) => option)}
          chipProps={{ size: "medium" }}
        />
      </Stack>
      <Stack
        spacing={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"end"}
      >
        <Button onClick={handleClose} > Cancel</Button>
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Stack>
    </FormProvider>
  );
};

const CreateGroup = ({ open, handleClose }) => {
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
      {/* Title */}
      <DialogTitle sx ={{mb:3}}>Create New Group</DialogTitle>
      {/* content */}
      <DialogContent>
        {/* Form */}
        <CreateGroupForm handleClose={handleClose}/>
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
