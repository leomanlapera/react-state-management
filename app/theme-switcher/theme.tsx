import Parent from "./parent";
import { ThemeProvider } from "./theme-context";

export function Theme() {
  return (
    <ThemeProvider>
      <Parent />
    </ThemeProvider>
  );
}
