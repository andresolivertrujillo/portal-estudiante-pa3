import { useState } from 'react'
import courses from '../data/courses'
import CourseCard from '../components/CourseCard'

function CoursesPage() {
  const [busqueda, setBusqueda] = useState('')

  const cursosFiltrados = courses.filter(curso =>
    curso.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <section style={{ padding: '2rem' }}>
      <h1>Catálogo de Cursos</h1>

      <input
        type="text"
        placeholder="Buscar curso..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        style={{
          padding: '0.5rem 1rem',
          marginBottom: '1.5rem',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '1rem'
        }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {cursosFiltrados.map(curso => (
          <CourseCard key={curso.id} curso={curso} />
        ))}
      </div>
    </section>
  )
}

export default CoursesPage