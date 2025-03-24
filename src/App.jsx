import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/' || location.pathname === '/register';

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthRoute && <Header />}
      <main className="flex flex-grow">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      {!isAuthRoute && <Footer />}
    </div>
  )
}

export default App
