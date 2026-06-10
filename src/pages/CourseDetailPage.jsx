import { Link, useParams } from 'react-router-dom'
import { useCourses } from '../context/CourseContext'
import courses from '../data/courses'

function CourseDetailPage() {
  const { id } = useParams()
  const { selectedCourses, agregarCurso } = useCourses()
  const courseId = parseInt(id, 10)
  const course = courses.find((item) => item.id === courseId)

  if (!course) {
    return (
      <section className="page">
        <h1>Curso no encontrado</h1>
        <Link to="/cursos">Volver a cursos</Link>
      </section>
    )
  }

  const isSelected = selectedCourses.some((item) => item.id === course.id)

  return (
    <section className="page">
      <h1>{course.nombre}</h1>
      <article className="course-card">
        <p>{course.descripcion}</p>
        <p>Docente: {course.docente}</p>
        <p>Creditos: {course.creditos}</p>
        <p>Duracion: {course.duracion}</p>
        <div className="course-actions">
          <button
            type="button"
            onClick={() => agregarCurso(course)}
            disabled={isSelected}
          >
            {isSelected ? 'Curso seleccionado' : 'Seleccionar curso'}
          </button>
          <Link to="/cursos">Volver a cursos</Link>
        </div>
      </article>
    </section>
  )
}

export default CourseDetailPage
