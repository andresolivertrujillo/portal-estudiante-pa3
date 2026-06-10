import { Link } from 'react-router-dom'
import { useCourses } from '../context/CourseContext'

function CourseCard({ course }) {
  const { selectedCourses, agregarCurso } = useCourses()
  const isSelected = selectedCourses.some((item) => item.id === course.id)

  return (
    <article className="course-card">
      <h2>{course.nombre}</h2>
      <p>{course.descripcion}</p>
      <p>Docente: {course.docente}</p>
      <p>Creditos: {course.creditos}</p>
      <div className="course-actions">
        <Link to={`/cursos/${course.id}`}>Ver detalle</Link>
        <button
          type="button"
          onClick={() => agregarCurso(course)}
          disabled={isSelected}
        >
          {isSelected ? 'Curso seleccionado' : 'Seleccionar curso'}
        </button>
      </div>
    </article>
  )
}

export default CourseCard
