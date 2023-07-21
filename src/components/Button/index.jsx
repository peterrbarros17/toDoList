import styles from "./Button.module.scss";

export default function Button({ onClick, children }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
