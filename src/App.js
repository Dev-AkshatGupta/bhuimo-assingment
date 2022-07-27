import React, { useState } from "react";
import {
  EditProjectModal,
  AddProjectModal,
  CardsGroup,
  DataGraph,
} from "components";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, Stack, Typography } from "@mui/material";
import { addProjectModal } from "./redux/reducers/projectsSlice";

function App() {
  const { isAddProjectModalOpen, isEditProjectModalOpen, projects } =
    useSelector((state) => state.projects);
  const [showChart, setShowchart] = useState(false);
  const dispatch = useDispatch();
  const options = {
    scales: {
      y: {
        min: 1000,
        max: 100000,
        stepSize: 10,
      },
      x: {},
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const projectsAverage = projects.map((project, i) => {
    if (projects[i + 1]) {
      return (project.budget + projects[i + 1]["budget"])/ 2;
    } else {
      return project["budget"];
    }
  });
  return (
    <div className="App">
      <Button
        variant="contained"
        color="success"
        size="small"
        onClick={() => {
          dispatch(addProjectModal());
        }}
      >
        Add Projects
      </Button>
      <Stack direction="row" spacing={2}>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Total Projects={projects.length}
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Total Projects Budget=
          {projects.reduce((acc, curr) => {
            return (acc = curr.budget + acc);
          }, 0)}
        </Typography>
      </Stack>
      <Button
        onClick={() => {
          setShowchart((prev) => !prev);
        }}
      >
        {showChart ? "Collpase Chart" : "Show Chart"}{" "}
      </Button>
      {showChart && (
        <Box
          sx={{
            width: 500,
            height: 300,
          }}
        >
          <DataGraph
            chartData={{
              labels: projects.map((data) => `Project ${data.id}`),
              datasets: [
                {
                  label: "Projects Budget",
                  data: projects.map((data) => data.budget),
                  backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                  ],
                  borderColor: "black",
                  borderWidth: 2,
                },
                {
                  label: "Projects Average",
                  data: projectsAverage.map((data) => data),
                  backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                  ],
                  borderColor: "grey",
                  borderWidth: 2,
                  borderDash: [10, 5],
                },
              ],
            }}
            options={options}
          />
        </Box>
      )}
      <CardsGroup />
      {isAddProjectModalOpen && <AddProjectModal />}
      {isEditProjectModalOpen && <EditProjectModal />}
    </div>
  );
}

export default App;
