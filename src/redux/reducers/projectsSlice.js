import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  projects: [],
  isAddProjectModalOpen: false,
  isEditProjectModalOpen: false,
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
      console.log(action.payload);
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload.id
      );
    },
    addProject(state, action) {
      action.payload = { ...action.payload, id: state.projects.length + 1 };
      state.projects = [...state.projects, action.payload];
    },
  },

  extraReducers: {},
});
export const { deleteProject, addProject, addProjectModal, editProjectModal } =
  projectsSlice.actions;
export default projectsSlice.reducer;
