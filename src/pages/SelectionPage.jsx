import { Link } from 'react-router-dom'
import { useCourses } from '../context/CourseContext'

function SelectionPage() {
  const { selectedCourses, quitarCurso } = useCourses()

  return (
    <section>
      <h1>Mi seleccion</h1>

      {selectedCourses.length === 0 ? (
        <p>No hay cursos seleccionados.</p>
      ) : (
        selectedCourses.map((course) => (
          <article key={course.id}>
            <h2>{course.nombre}</h2>
            <p>{course.descripcion}</p>
            <p>Docente: {course.docente}</p>
            <p>Creditos: {course.creditos}</p>
            <p>Duracion: {course.duracion}</p>
            <button type="button" onClick={() => quitarCurso(course.id)}>
              Eliminar curso
            </button>
          </article>
        ))
      )}

      <Link to="/cursos">Ver cursos disponibles</Link>
    </section>
  )
}

export default SelectionPage
