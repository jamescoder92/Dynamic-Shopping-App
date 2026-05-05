import { useState } from "react";

function AddProjectForm({ onAddProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
}

    function handleSubmit(e) {
        e.preventDefault();
        if (title && description) {
            onAddProject({ title, description });
            setTitle("");
            setDescription("");
        }

        return (
            <div>
                <h2>Add New Project</h2>
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                
                    <label>Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    <button type="submit">Add Project</button>
                </form>
            </div>
        );
    }

export default AddProjectForm