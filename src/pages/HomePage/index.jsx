import styles from "./HomePage.module.scss";

import Tasks from "components/Tasks";
import Header from "components/Header";
import AddTask from "components/AddTask";

export default function HomePage() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <AddTask />
      <Tasks />
    </main>
  );
}
