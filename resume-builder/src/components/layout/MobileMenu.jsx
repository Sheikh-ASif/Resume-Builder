
const MobileMenu = ({
  navLinks,
  active,
  scrollToSection,
}) => {
  return (
    <div className="mobile-menu">
      {navLinks.map((link) => (
        <div
          key={link}
          className={
            active === link.toLowerCase()
              ? "mobile-active"
              : ""
          }
          onClick={() =>
            scrollToSection(link.toLowerCase())
          }
        >
          {link}
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;