import type { Route } from "./+types/home";
import { Main } from "~/context/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Context() {
  return <Main />;
}
