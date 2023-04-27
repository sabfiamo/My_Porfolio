import "../../styles/layout/footer.scss";

function Icons() {
  return (
    <div className="footer__container">
      <a
        href="https://github.com/sabfiamo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github-alt footer__icon"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/monica-saborido/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin footer__icon"></i>
      </a>
      <a
        href="mailto:sabfiamo@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-regular fa-envelope footer__icon"></i>
      </a>
    </div>
  );
}
export default Icons;
