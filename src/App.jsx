import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Locations from './pages/Locations'
import Perks from './pages/Perks'
import Franchise from './pages/Franchise'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/perks" element={<Perks />} />
          <Route path="/franchise" element={<Franchise />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
