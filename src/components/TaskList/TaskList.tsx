import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { TypeTask } from "../../models/models"
import { Task } from "../Task/Task"
import { TaskInput } from "../TaskInput/TaskInput"
import { Sun } from "../Icons/Sun"
import { Moon } from "../Icons/Moon"
import { useDarkMode } from "../../hooks/useDarkMode"

const TaskList = () => {
  // Hooks
  const [darkMode, toggleDarkMode] = useDarkMode()
  const [tasks, setTasks] = useState<TypeTask[]>(
    localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : []
  )

  const ref = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useLayoutEffect(() => {
    document.title = `You have ${ tasks.length } tasks`
  }, [tasks])

  // Handle Functions
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!ref.current?.value || ref.current?.value.length < 3) {
      alert('Task must be at least 3 characters long')
      return
    }

    let newTask: TypeTask = {
      id: new Date().getTime(),
      title: ref.current.value
    }

    setTasks([newTask, ...tasks])
    ref.current.value = ''
  }

  const handleClickDel = useCallback((id: number) => {
    window.confirm('Are you sure you want to delete this task?') &&
    setTasks(prev => prev.filter(task => task.id !== id))
  }, [tasks])

  // Mode Styles
  const modeStyles = darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100'
  const bgModeStyles = darkMode ? 'bg-slate-700' : ''

  return (
    <div className={`w-full h-screen px-4 py-9 ${ bgModeStyles }`}>
      <div className={`max-w-sm lg:max-w-lg mx-auto border rounded-md p-4 ${ modeStyles }`}>
        <button onClick={ toggleDarkMode }>{ darkMode ? <Sun /> : <Moon /> }</button>
        <h1 className="font-bold text-center mb-6">Task List</h1>
        <form onSubmit={ handleSubmit } className="flex mb-4">
          <TaskInput ref={ ref } />
          <button
            type="submit"
            className="rounded px-4 font-bold bg-slate-400 text-slate-800 hover:bg-slate-500 hover:text-white active:bg-slate-300 active:text-slate-500"
          >
            Add
          </button>
        </form>
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} task={ task } onClick={ handleClickDel } />
          ))}
        </ul>
      </div>
    </div>
  )
}

export { TaskList }