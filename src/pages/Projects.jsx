import { Link } from "react-router-dom";

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
              <Link to={project.repo} target="_blank">
                <button>REPO</button>
              </Link>{" "}
              <Link to={project.deploy} target="_blank">
                <button>DEPLOY</button>
              </Link>
            </span>
          </article>
        </section>
      ))}
    </section>
  );
}

export default Projects;
