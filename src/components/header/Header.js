import Menu from "./Menu";
import Icons from "./Icons";
import "../../styles/layout/header.scss";

function Header(props) {
  return (
    <header className="header">
      <Menu btnState={props.btnState} handleClick={props.handleClick} />
      <Icons />
    </header>
  );
}

export default Header;
