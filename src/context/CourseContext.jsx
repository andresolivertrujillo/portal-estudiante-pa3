import { createContext, useContext, useState } from 'react'

const CourseContext = createContext()

function CourseProvider({ children }) {
  const [selectedCourses, setSelectedCourses] = useState([])

  function agregarCurso(course) {
    setSelectedCourses((currentCourses) => {
      const exists = currentCourses.some((item) => item.id === course.id)

      if (exists) {
        return currentCourses
      }

      return [...currentCourses, course]
    })
  }

  function quitarCurso(courseId) {
    setSelectedCourses((currentCourses) =>
      currentCourses.filter((course) => course.id !== courseId),
    )
  }

  return (
    <CourseContext.Provider
      value={{ selectedCourses, agregarCurso, quitarCurso }}
    >
      {children}
    </CourseContext.Provider>
  )
}

function useCourses() {
  const context = useContext(CourseContext)

  if (!context) {
    throw new Error('useCourses debe usarse dentro de CourseProvider')
  }

  return context
}

export { CourseProvider, useCourses }
