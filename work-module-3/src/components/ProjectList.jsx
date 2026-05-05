function ProjectList({ projects, onDeleteProject }) {
    return (
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                <button onClick={() => onDeleteProject(project.id)}>Delete</button>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProjectList
            
        