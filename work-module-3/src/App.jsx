import { useState } from "react";
import LandingPage from "./components/LandingPage";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project 1", description: "Description of Project 1" },
    { id: 2, name: "Project 2", description: "Description of Project 2" },
    { id: 3, name: "Project 3", description: "Description of Project 3" },
  ])

  const [searchTerm, setSearchTerm] = useState("");

  function handleAddProject(newProject) {
    setProjects([...projects, { id: Date.now(), ...newProject }]);
  }

  function handleDeleteProject(projectId) {
    setProjects(projects.filter((project) => project.id !== projectId));
  }

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <LandingPage
      projects={filteredProjects}
      onAddProject={handleAddProject}
      onSearch={setSearchTerm}
      onDeleteProject={handleDeleteProject}
    />  
  );
}

export default App;