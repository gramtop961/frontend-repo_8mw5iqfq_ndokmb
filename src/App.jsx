import Navbar from './components/Navbar'
import HeroSearch from './components/HeroSearch'
import RideList from './components/RideList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <HeroSearch />
        <RideList />
      </main>
      <Footer />
    </div>
  )
}

export default App
