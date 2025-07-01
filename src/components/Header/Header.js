import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleHamburgerClick = () => {
    setMenuActive(!menuActive);
  };

  const handleCloseClick = () => {
    setMenuActive(false);
  };

  return (
    <>
      <header className="header-wrapper">
        {menuActive && (
          <img
            className="close-icon"
            src="/close_icon.svg"
            alt="close menu icon"
            onClick={handleCloseClick}
          />
        )}
        <img
          className="hamburger-logo"
          src="/hamburger_menu.svg"
          alt="header menu icon"
          onClick={handleHamburgerClick}
        />
        <img className="brand-logo" src="/Logo.svg" alt="brand logo" />
        <nav>
          <ul className={`menu ${menuActive ? "active" : ""}`}>
            <li className="menu-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/about">About</Link>
            </li>
            <li className="menu-item">
              <Link to="/specials">Menu</Link>
            </li>
            <li className="menu-item">
              <Link to="/Rservations">Rservations</Link>
            </li>
            <li className="menu-item">
              <Link to="/order-online">Order Online</Link>
            </li>
            <li className="menu-item">
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
