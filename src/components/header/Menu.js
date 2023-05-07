import { Link } from "react-router-dom";
import "../../styles/layout/header.scss";

function Menu({ btnState, handleClick }) {
  let toggleClassCheck = btnState ? " close" : " open";
  return (
    <nav className="menu">
      <ul className={`menu__list${toggleClassCheck}`}>
        <li>
          <Link className="menu__item" to="/" onClick={handleClick}>
            About me
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/projects" onClick={handleClick}>
            Projects
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
      <ul className={`menu__toggle${toggleClassCheck}`} onClick={handleClick}>
        <span className="menu__burger"></span>
        <span className="menu__burger"></span>
        <span className="menu__burger"></span>
      </ul>
    </nav>
  );
}

export default Menu;
