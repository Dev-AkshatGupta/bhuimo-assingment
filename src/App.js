import React from "react";
import { EditProjectModal, AddProjectModal, Cards } from "components";
import { useSelector } from "react-redux";

function App() {
  const {isAddProjectModalOpen,isEditProjectModalOpen}=useSelector(state=>state.projects);
  return (
    <div className="App">
      <Cards />
      {isAddProjectModalOpen && <AddProjectModal />}
      {isEditProjectModalOpen && <EditProjectModal />}
    </div>
  );
}

export default App;
