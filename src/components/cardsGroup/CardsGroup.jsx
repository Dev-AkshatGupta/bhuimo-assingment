import React from 'react';
import {Cards} from "./../cards/Cards";
import {useSelector} from "react-redux";
import {Stack} from "@mui/material"; 
const CardsGroup = () => {
    const {projects}=useSelector(state=>state.projects);
  return (
    <Stack spacing={2} >
      {projects.map((project) => (
        <Cards project={project} key={projects.id} />
      ))}
    </Stack>
  );
}

export { CardsGroup}
