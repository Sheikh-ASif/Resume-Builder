// src/layout/Navbar.jsx

import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* CTA */}
      <button
        className="create-btn"
        onClick={() => scrollToSection("builder")}
      >
        Create Resume
      </button>

      {/* Mobile Hamburger */}
      <div
        className="hamburger"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </div>

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