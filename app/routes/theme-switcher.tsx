import { Theme } from "~/theme-switcher/theme";
import type { Route } from "./+types/theme-switcher";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Theme Switcher" },
    { name: "description", content: "Theme Switcher with Context API" },
  ];
}

export default function ThemeSwitcher() {
  return <Theme />;
}
