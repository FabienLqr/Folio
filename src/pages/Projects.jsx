import projects from "../data/dataProjects";

function Projects() {
  return (
    <section className="projects">
      {projects.map((project) => (
        <section key={project.name} className="project">
          <h2>{project.name}</h2>
          <article>
            <img src={project.img} />
            <p>{project.desc}</p>
            <span>
              <button>REPO</button> <button>DEPLOY</button>
            </span>
          </article>
        </section>
      ))}
    </section>
  );
}

export default Projects;
