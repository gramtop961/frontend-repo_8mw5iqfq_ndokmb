import HeroSearch from './HeroSearch'
import RideList from './RideList'

export default function Home() {
  return (
    <>
      <HeroSearch />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Campus corridors • Islamabad & Rawalpindi</h2>
          <p className="text-gray-600 mt-1">Built for students commuting between universities across the twin cities.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { from: 'NUST H-12', to: 'FAST H-11' },
              { from: 'COMSATS Islamabad', to: 'Air University' },
              { from: 'QAU', to: 'IIUI' },
              { from: 'Riphah I-14', to: 'NUML H-9' },
              { from: 'FJWU Rawalpindi', to: 'SZABIST Islamabad' },
              { from: 'PMAS Arid Rawalpindi', to: 'IQRA Islamabad' },
            ].map((r, i) => (
              <div key={i} className="rounded-lg border border-gray-100 p-4 bg-gray-50/60">
                <div className="text-sm text-gray-600">Popular route</div>
                <div className="text-gray-900 font-semibold mt-1">{r.from} → {r.to}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RideList />
    </>
  )
}
