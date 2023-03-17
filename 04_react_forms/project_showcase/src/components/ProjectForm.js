import React, { useState } from "react";

const ProjectForm = ({ setProjects }) => {

  const [formData, setFormData] = useState({
    id: 200,
    name: "",
    about: "",
    phase: "",
    link: "",
    image: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formData)
    //add this to list of projects
    setProjects((projects) => [...projects, formData])
    //reset the form
    setFormData({
      id: "",
      name: "",
      about: "",
      phase: "",
      link: "",
      image: ""
    })
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" value={formData.about} onChange={handleChange} />

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase" value={formData.phase} onChange={handleChange} >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" value={formData.link} onChange={handleChange} />

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
