import React from "react";
import {
  EditProjectModal,
  AddProjectModal,
  CardsGroup,
  DataGraph,
} from "components";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box } from "@mui/material";
import { addProjectModal } from "./redux/reducers/projectsSlice";

function App() {
  const { isAddProjectModalOpen, isEditProjectModalOpen, projects } =
    useSelector((state) => state.projects);

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
  };

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

      {isAddProjectModalOpen && <AddProjectModal />}
      {isEditProjectModalOpen && <EditProjectModal />}
      <Box
        sx={{
          width: 500,
          height: 300,
        }}
      >
        <DataGraph
          chartData={{
            labels: projects.map((data) => data.id),
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
            ],
          }}
          options={options}
        />
      </Box>
      <CardsGroup />
    </div>
  );
}

export default App;
