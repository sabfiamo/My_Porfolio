import "../../styles/pages/projects.scss";

import Project from "./Project";

function Projects({ allProjects }) {
  const dataHtml = allProjects.map((eachProject, index) => {
    return <Project eachProject={eachProject} key={index}></Project>;
  });
  return (
    <div className="projects" id="projects">
      <h3 className="projects__title">PROJECTS</h3>
      <ul className="projects__list">{dataHtml}</ul>
    </div>
  );
}

export default Projects;
