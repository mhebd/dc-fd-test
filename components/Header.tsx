import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          BlogApp
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Home
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

