import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import CourseDetailPage from '../pages/CourseDetailPage'
import CoursesPage from '../pages/CoursesPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import SelectionPage from '../pages/SelectionPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cursos" element={<CoursesPage />} />
        <Route path="cursos/:id" element={<CourseDetailPage />} />
        <Route path="seleccion" element={<SelectionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
