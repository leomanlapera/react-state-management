import { useTheme } from "./theme-context";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        bg-neutral-200 py-4 px-8
        ${
          theme === "light"
            ? "bg-neutral-900 text-white"
            : "bg-neutral-200 text-neutral-900"
        }
      `}
    >
      Swich to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
