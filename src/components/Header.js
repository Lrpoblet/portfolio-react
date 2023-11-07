import menu from '../images/ico-menu.svg';
import light from '../images/ico-light.png';

function Header({ image }) {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" target="_blank">
          <img
            src={menu}
            alt="menu icon"
            title="menu icon"
            className="nav__menu"
          />
        </a>
        <a href="/" target="_blank">
          <img
            src={image}
            alt="Logo Lrpoblet"
            title="Logo"
            className="nav__logo"
          />
        </a>
        <a href="/" target="_blank">
          <img
            src={light}
            alt="light icon"
            title="light icon"
            className="nav__light"
          />
        </a>
      </nav>
    </header>
  );
}

export default Header;
