import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <h2>Portal del Estudiante</h2>
      <Link to="/">Inicio</Link>
      <Link to="/cursos">Cursos</Link>
      <Link to="/seleccion">Mi seleccion</Link>
    </nav>
  )
}

export default Navbar
