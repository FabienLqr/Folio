import projects from "../data/dataProjects";

function Projects() {
  return (
    <section className="projects">
      {projects.map((project) => (
        <section key={project.name} className="project">
          <h2>{project.name}</h2>
        </section>
      ))}
    </section>
  );
}

export default Projects;
