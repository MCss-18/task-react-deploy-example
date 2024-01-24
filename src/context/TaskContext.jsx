import { createContext, useState, useEffect } from "react"
import { tasks as data} from '../data/tasks'
// Proporciona una forma sencilla de acceder al valor de un contexto sin necesidad de render props o del patrón de componente de orden superior (HOC).
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(task){
    setTasks([...tasks, {
      title: task.title,
      id: parseInt(tasks[tasks.length - 1].id + 1),
      description: task.description
    }])
  }

  function deleteTask( taskId ){
    setTasks(tasks.filter( task => task.id !== taskId ))
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
      { props.children }
    </TaskContext.Provider>
  )
}

