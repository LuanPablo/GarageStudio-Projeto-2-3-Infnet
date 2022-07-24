import { useEffect, useState } from 'react'
import { LayoutPortal } from '../../components/LayoutPortal'
import { PortalHeader } from '../../components/PortalHeader'
import { getCourses } from '../../services/Courses.service'
import { toast } from 'react-toastify'
import { Loading } from '../../components/Loading'
import { TableCourses } from './TableCourses'

export function AdminCoursesView () {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchCourses = async () => {
    try {
      const data = await getCourses()
      setCourses(data)
    } catch {
      toast.error('Falha ao buscar cursos. Recarregue a página.')
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchCourses()
  }, [])
  return (
    <LayoutPortal>
      <PortalHeader
        title='Cursos cadastrados'
        buttonText='Novo curso'
        buttonLink='/portal/cursos/cadastro'
      />
      {loading && <Loading />}
      <TableCourses courses={courses} onDeleteCourse={fetchCourses} />
    </LayoutPortal>
  )
}