import { Shield, Car, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center">
              <Car className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold">Safar.pk</span>
          </div>
          <p className="text-gray-600 text-sm">Connecting Pakistan one ride at a time. Share seats, save money, and reduce traffic.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Top routes</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-600" /> Karachi ↔ Lahore</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-600" /> Islamabad ↔ Peshawar</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-600" /> Lahore ↔ Multan</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Trust & safety</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-blue-600" /> Verified profiles</li>
            <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-blue-600" /> Driver ratings</li>
            <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-blue-600" /> 24/7 support</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Safar.pk</span>
          <a href="#" className="hover:text-gray-700">Privacy • Terms</a>
        </div>
      </div>
    </footer>
  )
}
