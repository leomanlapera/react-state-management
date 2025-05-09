import { AddTask } from "./add-task";
import { TaskList } from "./task-list";
import { TaskProvider } from "./task-context";

export function TaskApp() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4 flex flex-col gap-4">
      <TaskProvider>
        <h1 className="text-xl">Day of in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </main>
  );
}
