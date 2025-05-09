import { useContext, useState } from "react";
import { TasksDispatchContext, useTasks, type Task } from "./task-context";

export function TaskList() {
  const tasks = useTasks();

  if (!tasks) throw Error("useContext must be used within a TasksProvider");

  return (
    <ul className="flex flex-col gap-2">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
}

function TaskItem({ task }: { task: Task }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const dispatch = useContext(TasksDispatchContext);

  if (!dispatch) throw Error("useContext must be used within a TasksProvider");

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
          className="border border-gray-500 px-2 h-9"
        />
        <button
          onClick={() => setIsEditing(false)}
          className="bg-gray-500 px-2 h-9 text-white"
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          onClick={() => setIsEditing(true)}
          className="bg-gray-500 px-2 h-9 text-white"
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <label className="flex gap-2 items-center">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }
        }}
      />
      {taskContent}
      <button
        onClick={() =>
          dispatch({
            type: "deleted",
            id: task.id,
          })
        }
        className="bg-gray-500 px-2 h-9 text-white"
      >
        Delete
      </button>
    </label>
  );
}
