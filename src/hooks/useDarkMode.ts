import { useState } from "react"

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true")
  localStorage.setItem("darkMode", darkMode.toString())

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return [darkMode, toggleDarkMode] as const
}