import { Menu, Github, LogIn } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg" />
            <span className="text-xl font-semibold tracking-tight">BreezeVC</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              <Github className="h-4 w-4" /> Import project
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-br from-blue-600 to-indigo-600 shadow hover:opacity-95 transition">
              <LogIn className="h-4 w-4" /> Get started
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 text-gray-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
