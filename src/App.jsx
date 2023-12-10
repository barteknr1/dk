import { Routes, Route } from 'react-router-dom'
import SharedLayout from './components/SharedLayout/SharedLayout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Offer from './pages/Offer/Offer'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        </Route>
    </Routes>
  )
}

export default App
