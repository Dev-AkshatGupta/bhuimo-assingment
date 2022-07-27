import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  projects: [],
  isAddProjectModalOpen: false,
  isEditProjectModalOpen: false,
  projectToBeEdited: {},
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProjectModal(state, action) {
      state.isAddProjectModalOpen = !state.isAddProjectModalOpen;
    },
    editProjectModal(state, action) {
      state.isEditProjectModalOpen = !state.isEditProjectModalOpen;
    },
    deleteProject(state, action) {

      state.projects = state.projects.filter(
        (project) => project.id !== action.payload.id
      );
    },
    addProject(state, action) {
      action.payload = { ...action.payload, id: state.projects.length + 1 };
      state.projects = [...state.projects, action.payload];
    },
    copyProject(state, action) {
      action.payload = {
        ...action.payload,
        id: state.projects.length + 1,
      };
      state.projects = [...state.projects, action.payload];
    },
    toEditProject(state, action) {
      state.projectToBeEdited = action.payload;
    },
    editProject(state, action) {
      const projectIndex = state.projects.findIndex(
        (project) => project.id === action.payload.id
      );
      state.projects[projectIndex]=action.payload;
    
    },
  },
});
export const {
  deleteProject,
  addProject,
  addProjectModal,
  editProjectModal,
  copyProject,
  editProject,
  toEditProject,
} = projectsSlice.actions;
export default projectsSlice.reducer;
