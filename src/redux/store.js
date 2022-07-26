import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from "../redux/reducers/projectsSlice";
export const store = configureStore({
  reducer: {
    projects:projectsReducer
  },
});
