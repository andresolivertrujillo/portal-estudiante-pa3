import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

function CoursesPage() {
  return (
    <section>
      <h1>Cursos</h1>
      <p>Lista de cursos disponibles.</p>

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </section>
  )
}

export default CoursesPage
