import "../../styles/layout/header.scss";

function Icons() {
  return (
    <div className="menu__icon--container">
      <a
        href="https://github.com/sabfiamo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github-alt menu__icon--item"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/monica-saborido/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin menu__icon--item"></i>
      </a>
      <a
        href="mailto:sabfiamo@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-regular fa-envelope menu__icon--item"></i>
      </a>
    </div>
  );
}
export default Icons;
