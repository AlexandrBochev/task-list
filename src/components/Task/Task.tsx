import { memo, useState } from "react"
import { Bin } from "../Icons/Bin"
import { TypeTask } from "../../models/models"

interface TaskProps {
  task: TypeTask
  onClick: (id: number) => void
}

const Task = memo(({ task, onClick }: TaskProps) => {
  const [check, setCheck] = useState(true)

  const checkStyle = check ? "font-semibold" : "font-semibold line-through text-slate-500"

  return (
    <li className=" flex items-center justify-between border-b py-2">
      <div className="flex">
        <input className="mr-3" type="checkbox" onChange={ () => setCheck(prev => !prev) } />
        <p className={ checkStyle }>{ task.title }</p>
      </div>
      <button
        onClick={ () => onClick(task.id) }
        className="text-slate-400 hover:text-slate-500 active:text-slate-400"
      >
        <Bin />
      </button>
    </li>
  )
})
export { Task }