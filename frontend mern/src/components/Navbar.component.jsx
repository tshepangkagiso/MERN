import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <Link to="/" className='navbar-brand'>ExerciseTracker</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className='nav-link'>Exercises</Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className='nav-link'>Create Exercise log</Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className='nav-link'>Create User</Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar