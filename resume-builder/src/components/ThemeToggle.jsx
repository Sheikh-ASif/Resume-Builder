// src/components/ThemeToggle.jsx

const ThemeToggle = ({
  theme,
  toggleTheme,
}) => {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {theme === "light"
        ? "🌙"
        : "☀️"}
    </button>
  );
};

export default ThemeToggle;