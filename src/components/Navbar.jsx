import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => setShowMenu(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/images/nav_Logo1.jpg" alt="Logo" />
        </div>

        <nav className={`nav-links ${showMenu ? "show" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/slider" onClick={closeMenu}>
                Certificates
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={closeMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  );
};
