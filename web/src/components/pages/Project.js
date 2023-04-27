import "../../styles/pages/project.scss";

const serverPort = process.env.PORT || 4000;

console.log(`Server listening at http://localhost:${serverPort}`);

const Project = ({ eachProject, index }) => {
  const technologies = eachProject.technologies.map((eachTechnology) => (
    <span className="project__tecn"> {eachTechnology} </span>
  ));

  return (
    <div className="project" key={index}>
      <a
        href={eachProject.demo}
        className="project__article"
        target="_blank"
        rel="noreferrer"
      >
        {/* <div className="project__container--image">
          <img
            src={eachProject.image}
            alt="Project_Image"
            className="project__image"
          />
        </div> */}
        <img
          src={`http://localhost:${serverPort}/${eachProject.image}`}
          alt="Project_Image"
          className="project__image"
        />
      </a>
      <div className="project__row">
        <h4 className="project__title">{eachProject.name.toUpperCase()}</h4>
        <div className="project__container">
          <a href={eachProject.repo} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github project__icons"></i>
          </a>
          <a href={eachProject.demo} target="_blank" rel="noreferrer">
            <i className="fa-solid fa-arrow-up-right-from-square project__icons"></i>
          </a>
        </div>
      </div>
      <div className="project__position">{technologies}</div>
    </div>
  );
};

export default Project;
