import { Car, MapPin, Star, Clock } from 'lucide-react'

const sampleRides = [
  {
    id: 1,
    from: 'Karachi',
    to: 'Lahore',
    time: 'Tomorrow • 7:00 AM',
    price: 4500,
    seats: 2,
    driver: { name: 'Ahmed R.', rating: 4.8 },
  },
  {
    id: 2,
    from: 'Islamabad',
    to: 'Peshawar',
    time: 'Today • 5:30 PM',
    price: 1200,
    seats: 3,
    driver: { name: 'Hina S.', rating: 5.0 },
  },
  {
    id: 3,
    from: 'Lahore',
    to: 'Multan',
    time: 'Fri • 9:00 AM',
    price: 1800,
    seats: 1,
    driver: { name: 'Usman K.', rating: 4.6 },
  },
]

function RideCard({ ride }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
          <Car className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center text-gray-900 font-semibold">
              <MapPin className="h-4 w-4 text-emerald-600 mr-1" /> {ride.from}
            </div>
            <span className="text-gray-400">→</span>
            <div className="flex items-center text-gray-900 font-semibold">
              <MapPin className="h-4 w-4 text-blue-600 mr-1" /> {ride.to}
            </div>
          </div>
          <div className="mt-1 text-sm text-gray-600 flex items-center gap-2">
            <Clock className="h-4 w-4" /> {ride.time}
            <span className="mx-2">•</span>
            <span>{ride.seats} seat(s) left</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <div className="h-8 w-8 rounded-full bg-gray-100 grid place-items-center font-medium">
                {ride.driver.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <span>{ride.driver.name}</span>
              <span className="flex items-center gap-1 text-amber-600 font-medium">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" /> {ride.driver.rating}
              </span>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">PKR {ride.price.toLocaleString()}</div>
              <button className="mt-1 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700">Request seat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RideList() {
  return (
    <section id="rides" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Popular rides</h2>
            <p className="text-gray-600 mt-1">Realistic fares and friendly drivers for intercity trips</p>
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">See all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sampleRides.map((r) => (
            <RideCard key={r.id} ride={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
