import { Link, useParams } from 'react-router-dom'
import courses from '../data/courses'

function CourseDetailPage() {
  const { id } = useParams()
  const courseId = parseInt(id, 10)
  const course = courses.find((item) => item.id === courseId)

  if (!course) {
    return (
      <section>
        <h1>Curso no encontrado</h1>
        <Link to="/cursos">Volver a cursos</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>{course.nombre}</h1>
      <p>{course.descripcion}</p>
      <p>Docente: {course.docente}</p>
      <p>Creditos: {course.creditos}</p>
      <p>Duracion: {course.duracion}</p>
      <Link to="/cursos">Volver a cursos</Link>
    </section>
  )
}

export default CourseDetailPage
