import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li>
          <Link className="menu__item" to="/">
            About me
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
