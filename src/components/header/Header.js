import Menu from "./Menu";
import Icons from "./Icons";
import "../../styles/layout/header.scss";

function Header(props) {
  return (
    <header className="header">
      {/* <h1 className="header__title">{props.title}</h1>
      <h2 className="header__subtitle">{props.subtitle}</h2> */}
      <Menu btnState={props.btnState} handleClick={props.handleClick} />
      <Icons />
    </header>
  );
}

export default Header;
