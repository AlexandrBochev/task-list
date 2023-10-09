import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true")

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return [darkMode, toggleDarkMode] as const
}