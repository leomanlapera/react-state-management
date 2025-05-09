import { useContext, type ReactNode } from "react";
import { LevelContext } from "./context";

export function Section({ children }: { children: ReactNode }) {
  const level = useContext(LevelContext);

  return (
    <section className="border border-gray-200 rounded-lg p-5">
      <LevelContext value={level + 1}>{children}</LevelContext>
    </section>
  );
}
