import { TaskApp } from "~/context-reducer/task-app";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Context Reducer" },
    { name: "decription", content: "Scaling up with reducer and context" },
  ];
}

export default function ContextReducer() {
  return <TaskApp />;
}
