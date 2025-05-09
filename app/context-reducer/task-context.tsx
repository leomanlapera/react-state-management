import {
  createContext,
  useContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export type TaskAction =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: Task }
  | { type: "deleted"; id: number };

export const TasksContext = createContext<Task[] | null>(null);
export const TasksDispatchContext = createContext<Dispatch<TaskAction> | null>(
  null
);

const initialTasks: Task[] = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }

    case "changed": {
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    }

    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw new Error("Unknown action: " + (action as any).type);
    }
  }
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
