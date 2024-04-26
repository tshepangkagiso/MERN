import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.component'
import CreateExercise from './components/CreateExercise.component'
import CreateUser from './components/CreateUser.component'
import ExerciseList from './components/ExerciseList.component'
import EditExercise from './components/EditExercise.component'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <br />
      <Routes>
        <Route path="/" Component={ExerciseList}/>
        <Route path="/edit/:id" Component={EditExercise}/>
        <Route path="/create" Component={CreateExercise}/>
        <Route path="/user" Component={CreateUser}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
