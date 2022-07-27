import React, { useState } from "react";
import { Card, Typography,Button,Stack } from "@mui/material";
import {useDispatch} from "react-redux";
import {deleteProject} from "./../../redux/reducers/projectsSlice";
const Cards = ({project}) => {
  const [value, setValue] = useState();
  const handleChange = (newValue) => {
    setValue(newValue);
  }; 
  const dispatch=useDispatch();
  return (
    <Card sx={{ minWidth: 275, maxWidth: 300, padding: "1rem" }}>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Card Name: {project.id}
      </Typography>
      <Typography variant="h5" component="div">
        Project Budget:{project.budget}
      </Typography>
      <Stack direction="column" spacing={2}>
        End Date: {project.endDate}
        <Stack direction="row" spacing={2}>
          <Button
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Edit
          </Button>
          <Button variant="outlined" color="error"
          onClick={()=>{dispatch(deleteProject(project));}}
          >
            Delete
          </Button>
          <Button>Copy </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export { Cards };
