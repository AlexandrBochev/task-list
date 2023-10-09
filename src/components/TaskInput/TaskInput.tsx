import { forwardRef } from "react"

const TaskInput = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <input
      ref={ ref }
      className="w-full border rounded p-2 mr-4"
      type="text" placeholder="Add Task"
    />
  )
})

export { TaskInput }