import { v4 as uuid } from "uuid";
const { useContext, createContext, useState } = require("react");

export const Context = createContext({});

export const AppUseContext = () => useContext(Context);

export const AppContext = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: "Estudar programação",
      completed: false,
    },
    {
      id: uuid(),
      title: "Ler livros",
      completed: true,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        id: uuid(),
        title: taskTitle,
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskCompleted = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <Context.Provider
      value={{
        tasks,
        handleTaskAddition,
        handleTaskCompleted,
        handleTaskDeletion,
      }}
    >
      {children}
    </Context.Provider>
  );
};
