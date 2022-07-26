import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  projects: [],
  isAddProjectModalOpen: false,
  isEditProjectModalOpen:false
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducer: {
    addProjectModal(state, action) {
      state.isAddProjectModalOpen = !state.isAddProjectModalOpen;
    },
    editProjectModal(state, action) {
      state.isEditProjectModalOpen = !state.isEditProjectModalOpen;
    },
    deleteProject(state, action) {},
    addProject(state, action) {
      const isItemInProject = state.project.findIndex(
        (project) => project.id === action.payload.id
      );
      const itemsIndexInProject = isItemInProject;
      if (isItemInProject === -1) {
        action.payload = { ...action.payload, id: state.project.length };
        state.project = [...state.project, action.payload];
      } else {
        state.project[itemsIndexInProject].quantity =
          state.project[itemsIndexInProject].quantity + 1;
      }
    },
  },

  extraReducers: {},
});
export const { deleteProject, addProject,addProjectModal,editProjectModal} = projectsSlice.actions;
export default projectsSlice.reducer;
