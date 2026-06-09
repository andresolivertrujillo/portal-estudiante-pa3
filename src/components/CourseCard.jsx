import { Link } from 'react-router-dom'

function CourseCard({ curso }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '1.5rem',
      width: '280px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ fontSize: '1.1rem' }}>{curso.nombre}</h2>
      <p>{curso.descripcion}</p>
      <p><strong>Docente:</strong> {curso.docente}</p>
      <p><strong>Créditos:</strong> {curso.creditos}</p>
      <Link to={`/cursos/${curso.id}`}>Ver detalle →</Link>
    </div>
  )
}

export default CourseCard