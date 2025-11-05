import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import RideList from './RideList'

const allRides = [
  { id: 11, from: 'NUST H-12', to: 'FAST H-11', time: 'Today • 3:30 PM', price: 200, seats: 2, driver: { name: 'Ayesha K.', rating: 4.9 } },
  { id: 12, from: 'COMSATS Islamabad', to: 'Air University', time: 'Today • 5:15 PM', price: 180, seats: 1, driver: { name: 'Hamza S.', rating: 4.7 } },
  { id: 13, from: 'QAU', to: 'IIUI', time: 'Tomorrow • 8:15 AM', price: 220, seats: 3, driver: { name: 'Hassan A.', rating: 4.8 } },
  { id: 14, from: 'FJWU Rawalpindi', to: 'NUML H-9', time: 'Fri • 9:00 AM', price: 160, seats: 2, driver: { name: 'Sana T.', rating: 5.0 } },
]

export default function Rides() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const query = {
    from: params.get('from') || '',
    to: params.get('to') || '',
  }

  const filtered = useMemo(() => {
    return allRides.filter(r => {
      const fromOk = query.from ? r.from.toLowerCase().includes(query.from.toLowerCase()) : true
      const toOk = query.to ? r.to.toLowerCase().includes(query.to.toLowerCase()) : true
      return fromOk && toOk
    })
  }, [query.from, query.to])

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Rides around Islamabad & Rawalpindi</h1>
            <p className="text-gray-600 mt-1">Search results for campus commutes between twin cities.</p>
          </div>
        </div>
        <div className="mt-6">
          {filtered.length === 0 ? (
            <div className="rounded-lg border border-dashed border-gray-200 p-8 text-center text-gray-600">
              No rides matched your search. Try different campuses.
            </div>
          ) : null}
        </div>
      </div>
      {/* Reuse the popular ride cards section for visual continuity */}
      <RideList />
    </section>
  )
}
