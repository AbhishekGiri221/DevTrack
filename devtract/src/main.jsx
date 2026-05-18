import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Optionpages/Dashboard.jsx'
import Tasks from './pages/Optionpages/Tasks.jsx'
import Goals from './pages/Optionpages/Goals.jsx'
import Notes from './pages/Optionpages/Notes.jsx'
import Profiles from './pages/Optionpages/Profile.jsx'
import Settings from './pages/Optionpages/Settings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Main layout */}
        <Route path='/' element={<App />} >

        {/* <Route index element={<Dashboard />} />
                This works.
                BUT URL remains:---> '/' */}
        {/* Default page */}
        <Route index element={<Navigate to="dashboard"/>}  />


        {/* Child components */}
        <Route path='dashboard' element={Dashboard}/>
        <Route path='tasks' element={Tasks}/>
        <Route path='goals' element={Goals}/>
        <Route path='notes' element={Notes}/>
        <Route path='profiles' element={Profiles}/>
        <Route path='settings' element={Settings}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>

)
