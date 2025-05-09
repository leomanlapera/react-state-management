import { useState } from "react";
import { useTasksDispatch } from "./task-context";

export function AddTask() {
  const [text, setText] = useState<string>("");
  const dispatch = useTasksDispatch();

  if (!dispatch) throw Error("useContext must be used within a TasksProvider");

  return (
    <div className="flex gap-4">
      <input
        className="border border-gray-500 px-4"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-gray-500 px-4 py-2 text-white"
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

let nextId = 3;
