import { useState } from 'react'
import { MapPin, Calendar, Users, Clock, Car } from 'lucide-react'

const campuses = [
  'NUST H-12',
  'FAST H-11',
  'COMSATS Islamabad',
  'Air University',
  'QAU',
  'IIUI',
  'FJWU Rawalpindi',
  'PMAS Arid Rawalpindi',
  'NUML H-9',
]

export default function PostRide() {
  const [from, setFrom] = useState('NUST H-12')
  const [to, setTo] = useState('FAST H-11')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [seats, setSeats] = useState(3)
  const [price, setPrice] = useState(200)
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // In a full app, this would send to the backend
    console.log({ from, to, date, time, seats, price })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="bg-white">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center">
            <Car className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Offer a campus ride</h1>
            <p className="text-gray-600">Help fellow students commute between Islamabad and Rawalpindi campuses.</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full outline-none bg-transparent">
                  {campuses.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full outline-none bg-transparent">
                  {campuses.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Seats</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                <Users className="h-4 w-4 text-gray-500" />
                <input type="number" min={1} max={6} value={seats} onChange={(e) => setSeats(parseInt(e.target.value || '1'))} className="w-full outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (PKR)</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                <span className="text-gray-500">₨</span>
                <input type="number" min={0} value={price} onChange={(e) => setPrice(parseInt(e.target.value || '0'))} className="w-full outline-none" />
              </div>
            </div>
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
            Post ride
          </button>
          {submitted && (
            <div className="text-center text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md p-3">
              Ride posted! This demo stores locally — connect a backend to make it live.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
