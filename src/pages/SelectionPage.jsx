import { Link } from 'react-router-dom'
import { useCourses } from '../context/CourseContext'

function SelectionPage() {
  const { selectedCourses, quitarCurso } = useCourses()

  return (
    <section className="page">
      <h1>Mi seleccion</h1>

      {selectedCourses.length === 0 ? (
        <p className="page-subtitle">No hay cursos seleccionados.</p>
      ) : (
        <div className="course-list">
          {selectedCourses.map((course) => (
            <article className="course-card" key={course.id}>
              <h2>{course.nombre}</h2>
              <p>{course.descripcion}</p>
              <p>Docente: {course.docente}</p>
              <p>Creditos: {course.creditos}</p>
              <p>Duracion: {course.duracion}</p>
              <div className="course-actions">
                <button type="button" onClick={() => quitarCurso(course.id)}>
                  Eliminar curso
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="page-actions">
        <Link to="/cursos">Ver cursos disponibles</Link>
      </div>
    </section>
  )
}

export default SelectionPage
