import './App.css'
import Navbar from '../src/components/Navbar/Navbar'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <Navbar />

      <main className='main-content'>
        <LandingPage />
      </main>
    </>
  )
}

export default App
