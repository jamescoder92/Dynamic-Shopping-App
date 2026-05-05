import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project 1", description: "Description of Project 1" },
    { id: 2, name: "Project 2", description: "Description of Project 2" },
    { id: 3, name: "Project 3", description: "Description of Project 3" },
  ]);

  return (
    <div>
      <h1>Personal Projects Showcase App</h1>
      </div>
  );
}

export default App;