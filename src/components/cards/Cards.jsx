import React, { useState } from "react";
import { Card, Typography,Button,Stack } from "@mui/material";
import {useDispatch} from "react-redux";
import {
  deleteProject,
  toEditProject,
  editProjectModal,
  copyProject,
} from "./../../redux/reducers/projectsSlice";
const Cards = ({project}) => {
  const dispatch=useDispatch();
  return (
    <Card sx={{ minWidth: 275, maxWidth: 300, padding: "1rem" }} key={project.id}>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Card Name: Project {project.id}
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
              dispatch( toEditProject(project));
              dispatch(editProjectModal());
            }}
          >
            Edit
          </Button>
          <Button variant="outlined" color="error"
          onClick={()=>{dispatch(deleteProject(project));}}
          >
            Delete
          </Button>
          <Button onClick={()=>{
            dispatch(copyProject(project));
          }}>Copy </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export { Cards };
