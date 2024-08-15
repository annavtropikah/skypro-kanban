import { createContext, useCallback, useState } from "react";



export const TasksContext = createContext({});



export const TaskProvider = ({ children }) => {



  const [cards, setCards] = useState();


  const updateTask = useCallback((newTask) => {
    console.log('новая задача', newTask);
    setCards(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  }, [])
  return (

    <TasksContext.Provider value={{ cards, updateTask }}>
      {children}
    </TasksContext.Provider>
  );
}