import styles from "./Tasks.module.scss";

import { AppUseContext } from "contents";
import Task from "components/Task";

export default function Tasks() {
  const { tasks } = AppUseContext();
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
        >
          {task.title}
        </Task>
      ))}
    </ul>
  );
}
