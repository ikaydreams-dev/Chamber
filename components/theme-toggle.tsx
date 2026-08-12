"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent rendering until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600" />
    )
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="w-10 h-10 bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors border border-slate-300 dark:border-slate-600"
      aria-label="Toggle theme"
      type="button"
    >
      {currentTheme === "dark" ? (
        <Sun className="w-5 h-5 text-slate-900 dark:text-slate-100" />
      ) : (
        <Moon className="w-5 h-5 text-slate-900 dark:text-slate-100" />
      )}
    </button>
  )
}
