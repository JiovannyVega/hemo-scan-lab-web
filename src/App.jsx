import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NewAnalisis from './pages/NewAnalisis'
import AnalisysList from './pages/AnalisysList'
import PatientList from './pages/Patient'
import Header from './components/Header'
import Footer from './components/Footer'
import Lefter from './components/Lefter'

function App() {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/' || location.pathname === '/register';
  const isNewAnalisisRoute = location.pathname === '/newanalisis';

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthRoute && <Header />}
      <main className="flex flex-grow">
        {isNewAnalisisRoute && <Lefter />}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/newanalisis" element={<NewAnalisis />} />
          <Route path="/analisislist" element={<AnalisysList />} />
          <Route path="/patientlist" element={<PatientList />} />
        </Routes>
      </main>
      {!isAuthRoute && <Footer />}
    </div>
  )
}

export default App
