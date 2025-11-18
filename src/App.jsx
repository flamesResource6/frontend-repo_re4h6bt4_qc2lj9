import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Community from './pages/Community'
import Learn from './pages/Learn'
import Events from './pages/Events'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-emerald-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/community" element={<Community />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/events" element={<Events />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
