import { MapPin, Calendar, Users, Search } from 'lucide-react'
import { useState } from 'react'

export default function HeroSearch() {
  const [from, setFrom] = useState('Karachi')
  const [to, setTo] = useState('Lahore')
  const [date, setDate] = useState('')
  const [seats, setSeats] = useState(1)

  const onSubmit = (e) => {
    e.preventDefault()
    // In a full app this would query the backend. For now we just log.
    console.log({ from, to, date, seats })
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-emerald-50">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">
              Pakistan Ride Sharing
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Find affordable city-to-city rides across Pakistan
            </h1>
            <p className="mt-4 text-gray-600 max-w-prose">
              Share your journey and save on travel costs. Connect with verified drivers and passengers going the same way.
            </p>
            <ul className="mt-4 text-sm text-gray-700 grid grid-cols-2 gap-2">
              <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full" /> Safe & verified</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full" /> Wallet-friendly fares</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full" /> Major cities covered</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full" /> Book in minutes</li>
            </ul>
          </div>
          <div>
            <form onSubmit={onSubmit} className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <input value={from} onChange={(e) => setFrom(e.target.value)} className="w-full outline-none" placeholder="City of departure" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <input value={to} onChange={(e) => setTo(e.target.value)} className="w-full outline-none" placeholder="Destination city" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Seats</label>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <Users className="h-4 w-4 text-gray-500" />
                    <input type="number" min={1} max={6} value={seats} onChange={(e) => setSeats(parseInt(e.target.value || '1'))} className="w-full outline-none" />
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
                <Search className="h-5 w-5" /> Search rides
              </button>
              <p className="text-xs text-gray-500 text-center">Popular: Karachi ↔ Lahore • Islamabad ↔ Peshawar • Lahore ↔ Multan</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
