import styles from "./Task.module.scss";

import { AppUseContext } from "contents";
import { useNavigate } from "react-router-dom";

import { CgClose, CgInfo } from "react-icons/cg";

export default function Task({ children, completed, id, title }) {
  const { handleTaskCompleted, handleTaskDeletion } = AppUseContext();

  const navigate = useNavigate();
  return (
    <li
      className={styles.task}
      style={completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <p className={styles.task__title} onClick={() => handleTaskCompleted(id)}>
        {children}
      </p>
      <div className={styles.task__buttons}>
        <button onClick={() => navigate(`/${title}`)}>
          <CgInfo size={20} />
        </button>
        <button onClick={() => handleTaskDeletion(id)}>
          <CgClose size={20} />
        </button>
      </div>
    </li>
  );
}
