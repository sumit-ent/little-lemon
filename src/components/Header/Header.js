import "./Header.css";
import { useState } from "react";
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
              <a href="/Home">Home</a>
            </li>
            <li className="menu-item">
              <a href="About">About</a>
            </li>
            <li className="menu-item">
              <a href="/Menu">Menu</a>
            </li>
            <li className="menu-item">
              <a href="/Rservations">Rservations</a>
            </li>
            <li className="menu-item">
              <a href="/order-online">Order Online</a>
            </li>
            <li className="menu-item">
              <a href="/Login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
