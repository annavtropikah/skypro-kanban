import { createContext, useCallback, useState } from "react";


function getTaskFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("task"));
  } catch (error) {
    console.log(error);
    return null;
  }
}
export const TasksContext = createContext({});



export const TaskProvider = ({ children }) => {

  // const [cards, setCards] = useState([]);
  
  const [cards, setCards] = useState(getTaskFromLocalStorage());


  const updateTask = useCallback((newTask) => {
    setCards(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  },[])
    return (
   
    <TasksContext.Provider value={{ cards, updateTask }}>
      {children}
    </TasksContext.Provider>
  );
}