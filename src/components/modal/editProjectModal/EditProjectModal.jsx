import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField, Button, Stack } from "@mui/material";
const EditProjectModal = () => {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [value, setValue] = useState();
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
      //   container={() => rootRef.current}
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
      >
        <Typography  variant="h6" component="h2">
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
          />

          {console.log(date)}
          <input
            type="date"
            id="start"
            name="trip-start"
            value={value}
            min={date}
            onChange={(e) => {
              setValue(e.target.value);
              console.log(e.target.value);
            }}
          ></input>

          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export { EditProjectModal };
