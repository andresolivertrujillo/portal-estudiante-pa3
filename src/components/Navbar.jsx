import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Portal del Estudiante</h2>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/cursos">Cursos</Link>
        <Link to="/seleccion">Mi seleccion</Link>
      </div>
    </nav>
  )
}

export default Navbar
