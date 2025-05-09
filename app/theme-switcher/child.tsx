import { useTheme } from "./theme-context";
import ThemeToggle from "./theme-toggle";

const Child = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#121212",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
      }}
      className="flex justify-center items-center text-center"
    >
      <div>
        <h1 className="text-2xl mb-10">Hello, Theme World!</h1>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Child;
