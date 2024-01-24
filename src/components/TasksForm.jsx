import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

function TasksForm() {
  const [ title, setTitle ] = useState("");
  const [ description, setDescription] = useState("")
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault(); // esto cancela el comportamiento por defecto
    createTask({
      title,
      description
    })
    setTitle("");
    setDescription("")
  }

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
        <h1 className='text-2xl font-bold text-white mb-3'>Create your task</h1>
        <input type="text" placeholder='Escribe tu tarea' 
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className='bg-slate-300 p-3 w-full mb-2'
        />
        <textarea
          placeholder="Escriba la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='bg-slate-300 p-3 w-full mb-2'
          >        
        </textarea>
        <button className='bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400'>Guardar</button>
      </form>
    </div>
  )
}


export default TasksForm;