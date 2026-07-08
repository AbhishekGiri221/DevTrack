import './App.css'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Optionpages/Dashboard/Dashboard'
import Tasks from "../src/pages/Optionpages/Tasks/Task"
import Goals from "./pages/Optionpages/Goals/Goals"
import Notes from "../src/pages/Optionpages/Notes/Notes"
import Profile from "../src/pages/Optionpages/Profile/Profile"
import Settings from "../src/pages/Optionpages/Settings"
import Mainpage from './pages/Mainpage'
import Login from './pages/Login'
import PublicRoute from '../src/components/routes/PublicRoute'
import ProtectedRoute from "../src/components/routes/ProtectedRoute"
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout'
import { useEffect, useState } from 'react'
import Signup from './pages/Signup'
import { getToken } from './utils/auth'
import axios from 'axios'

function App() {

  const filters = ["All", "Pending", "InProgress", "Completed"];
  const [activeFilter, setActiveFilter] = useState("All")
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState("create");
  const [taskToedit, setTaskToedit] = useState();
  const [task, setTask] = useState([]);
  const [viewTaskDetails, setViewTaskDetails] = useState(false);
  const [taskToView, setTaskToView] = useState(null);
  const navigate = useNavigate();
  // useEffect(() => {
  //   getTask();
  // }, []);

  async function getTask() {
    const token = getToken();

    try {
      const temporaryTask = await axios.get(
        "http://localhost:3000/app/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(temporaryTask.data);
      setTask(temporaryTask.data);

    } catch (error) {
      if(error?.response?.status === 401){
        localStorage.removeItem("token");
        navigate("/login");
      }
      alert(`it is in App ${error?.response?.status}`);
      
    }

  }


  return (
    <>
      <Routes>
        {/* Public Layout */}
        <Route element={<PublicLayout />} >
          <Route path='/' element={<PublicRoute><LandingPage /></PublicRoute>} />
          <Route path='login' element={<PublicRoute> <Login /> </PublicRoute>} />
          <Route path='signup' element={<PublicRoute> <Signup /> </PublicRoute>} />
        </Route>
        {/* Protected Layout */}
        <Route path='/app' element={
          <ProtectedRoute>
            <Mainpage />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to='/app/dashboard' />} />

          <Route path='dashboard' element={<Dashboard getTask={getTask} taskToView={taskToView} setTaskToView={setTaskToView} viewTaskDetails={viewTaskDetails} setViewTaskDetails={setViewTaskDetails} taskToedit={taskToedit} setTaskToedit={setTaskToedit} setShowForm={setShowForm} showForm = {showForm} task={task} setTask={setTask} filters={"All"} activeFilter={activeFilter} setMode={setMode} mode={mode} />} />
          <Route path='tasks' element={<Tasks getTask={getTask} taskToView={taskToView} setTaskToView={setTaskToView} viewTaskDetails={viewTaskDetails} setViewTaskDetails={setViewTaskDetails} taskToedit={taskToedit} setTaskToedit={setTaskToedit} mode={mode} setMode={setMode} setShowForm={setShowForm} showForm = {showForm} task={task} setTask={setTask} filters={filters} setActiveFilter={setActiveFilter} activeFilter={activeFilter} />} />
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
