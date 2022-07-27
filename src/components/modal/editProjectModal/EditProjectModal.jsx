import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField, Button, Stack } from "@mui/material";
import {
  editProject,
  editProjectModal,
} from "./../../../redux/reducers/projectsSlice";
import { useSelector, useDispatch } from "react-redux";
const EditProjectModal = () => {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const { projectToBeEdited } = useSelector((state) => state.projects);
  const [value, setValue] = useState(projectToBeEdited);
  const dispatch = useDispatch();
  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open
      aria-labelledby="server-modal-title"
      aria-describedby="server-modal-description"
      sx={{
        display: "flex",
        p: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => {
        dispatch(EditProjectModal());
      }}
 
    >
      <Box
        sx={{
          position: "relative",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: (theme) => theme.shadows[5],
          p: 4,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Typography variant="h6" component="h2">
          Edit Project
        </Typography>
        <Typography sx={{ pt: 2 }}>
          You can edit details of the Project.
        </Typography>
        <Stack spacing={2}>
          <TextField
            id="standard-basic"
            label="Project Budget"
            variant="standard"
            value={value.budget}
            onChange={(e) => {
              setValue((prev) => ({ ...prev, budget: e.target.value }));
            }}
          />

       
          <input
            type="date"
            id="start"
            name="trip-start"
            value={value.endDate}
            min={date}
            onChange={(e) => {
              setValue((prev) => ({ ...prev, endDate: e.target.value }));
            }}
          ></input>

          <Button
            variant="outlined"
            onClick={() => {
              dispatch(editProject(value));
               dispatch(editProjectModal());
            }}
          >
            Edit
          </Button>
          <Button
            color="error"
            variant="outlined"
            onClick={() => {
              dispatch(editProjectModal());
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export { EditProjectModal };
