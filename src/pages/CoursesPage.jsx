import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

function CoursesPage() {
  return (
    <section className="page">
      <h1>Cursos</h1>
      <p className="page-subtitle">Lista de cursos disponibles.</p>

      <div className="course-list">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

export default CoursesPage
