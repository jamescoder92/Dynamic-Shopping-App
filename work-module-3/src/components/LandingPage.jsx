import AddProjectForm from "./AddProjectForm";
import ProjectList from "./ProjectList";
import SearchBar from "./SearchBar";

function LandingPage({ projects, onAddProject, onSearch, onDeleteProject }) {
    return (
        <div>
            <h1>Personal Projects Showcase App</h1>
            <AddProjectForm onAddProject={onAddProject} />
            <SearchBar onSearch={onSearch} />
            <ProjectList projects={projects} onDeleteProject={onDeleteProject} />
        </div>
    )
}

export default LandingPage