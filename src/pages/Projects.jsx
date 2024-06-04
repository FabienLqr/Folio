import projects from "../data/dataProjects";

function Projects() {
  return (
    <>
      {projects.map((project) => (
        <section key={project.name}>
          <h2>{project.name}</h2>
        </section>
      ))}
    </>
  );
}

export default Projects;
