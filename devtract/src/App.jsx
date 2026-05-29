import './App.css'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Optionpages/Dashboard/Dashboard'
import Tasks from "../src/pages/Optionpages/Tasks"
import Goals from "../src/pages/Optionpages/Goals"
import Notes from "../src/pages/Optionpages/Notes"
import Profile from "../src/pages/Optionpages/Profile/Profile"
import Settings from "../src/pages/Optionpages/Settings"
import Mainpage from './pages/Mainpage'
import Login from './pages/Login'
import PublicRoute from '../src/components/routes/PublicRoute'
import ProtectedRoute from "../src/components/routes/ProtectedRoute"
import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout'


function App() {

  return (
    <>
      <Routes>
        {/* Public Layout */}
        <Route element={<PublicLayout />} >
          <Route path='/' element={<PublicRoute><LandingPage /></PublicRoute>} />
          <Route path='login' element={<PublicRoute> <Login /> </PublicRoute>} />

        </Route>
        {/* Protected Layout */}
        <Route path='/app' element={
          <ProtectedRoute>
            <Mainpage />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to='/app/dashboard' />} />

          <Route path='dashboard' element={<Dashboard />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='goals' element={<Goals />} />
          <Route path='notes' element={<Notes />} />
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />

        </Route>

      </Routes>



    </>
  )
}

export default App
