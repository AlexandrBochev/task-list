import { useState } from "react"

interface TaskInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  refValue: React.MutableRefObject<string>
}

const TaskInput = ({ onSubmit, refValue }: TaskInputProps) => {
  const [titleValue, setTitleValue] = useState<string>(refValue.current)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value)
    refValue.current = e.target.value
  }

  const handleClick = () => setTitleValue('')

  return (
    <form onSubmit={ onSubmit } className="flex mb-4">
      <input
        onChange={ handleChange }
        className="w-full border rounded p-2 mr-4"
        type="text" placeholder="Add Task"
        value={ titleValue }
      />
      <button
        type="submit"
        onClick={ handleClick }
        className="rounded px-4 font-bold bg-slate-400 text-slate-800 hover:bg-slate-500 hover:text-white active:bg-slate-300 active:text-slate-500"
      >
        Add
      </button>
    </form>
  )
}

export { TaskInput }