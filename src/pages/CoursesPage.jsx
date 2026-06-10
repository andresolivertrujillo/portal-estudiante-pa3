import { useState } from 'react'
import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

function CoursesPage() {
  const [busqueda, setBusqueda] = useState('')

  const cursosFiltrados = courses.filter((course) =>
    course.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  )

  return (
    <section className="page">
      <h1>Catalogo de Cursos</h1>
      <p className="page-subtitle">Lista de cursos disponibles.</p>

      <input
        className="search-input"
        type="text"
        placeholder="Buscar curso..."
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
      />

      <div className="course-list">
        {cursosFiltrados.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

export default CoursesPage
