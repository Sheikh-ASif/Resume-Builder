

import { useState } from "react";
import MobileMenu from "./MobileMenu";
// import ThemeToggle from "../ThemeToggle";
// import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // const { theme, toggleTheme } = useTheme();

  const navLinks = [
    "Home",
    "Templates",
    "Features",
    "About",
    "Contact",
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setActive(sectionId);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div
        className="logo"
        onClick={() => scrollToSection("home")}
      >
        Resume<span>Forge</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li
            key={link}
            className={
              active === link.toLowerCase()
                ? "active"
                : ""
            }
            onClick={() =>
              scrollToSection(link.toLowerCase())
            }
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Right Side Actions */}
      <div className="navbar-actions">
        {/* <ThemeToggle
          theme={theme}
          toggleTheme={toggleTheme}
        /> */}

        <button
          className="create-btn"
          onClick={() =>
            scrollToSection("builder")
          }
        >
          Create Resume
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="hamburger"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <MobileMenu
          navLinks={navLinks}
          active={active}
          setActive={setActive}
          scrollToSection={scrollToSection}
        />
      )}
    </nav>
  );
};

export default Navbar;