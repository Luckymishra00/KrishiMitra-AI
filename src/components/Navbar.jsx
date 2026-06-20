import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#4F7C0D] dark:bg-slate-900 text-white shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            🌱 KrishiMitra AI
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-lg">
          <Link
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="hover:text-yellow-300 transition duration-300"
          >
            Dashboard
          </Link>

          <Link
            href="/disease-detection"
            className="hover:text-yellow-300 transition duration-300"
          >
            Disease Detection
          </Link>

          <Link
            href="/login"
            className="hover:text-yellow-300 transition duration-300"
          >
            Login
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}