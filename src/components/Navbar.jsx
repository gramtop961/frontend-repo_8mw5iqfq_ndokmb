import { Car, User, Globe } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center">
            <Car className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Safar.pk</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#how" className="hover:text-blue-600">How it works</a>
          <a href="#rides" className="hover:text-blue-600">Find rides</a>
          <a href="#" className="hover:text-blue-600">Offer a ride</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">
            <Globe className="h-4 w-4" /> EN
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
            <User className="h-4 w-4" /> Sign in
          </button>
        </div>
      </div>
    </header>
  )
}
