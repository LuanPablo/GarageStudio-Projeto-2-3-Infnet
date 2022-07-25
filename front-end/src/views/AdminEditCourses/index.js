import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { LayoutPortal } from "../../components/LayoutPortal";
import { Loading } from "../../components/Loading";
import { UpsertCourseForm } from "../../components/UpsertCourseForm";
import { getCourseById, updateCourse } from "../../services/Courses.service";

export function AdminEditCourseView () {
  const { id } = useParams()
  const [course, setCourse] = useState()
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseData = await getCourseById(id)
        setCourse(courseData)
      } catch {
        toast.error('Falha ao buscar dados do curso. Recarregue a página.')
      }
    }
    fetchCourse()
  }, [id])
  const navigate = useNavigate()
  const handleSubmit = async (formData) => {
    try {
      await updateCourse(id, formData)
      toast.success('Curso alterado com sucesso.')
      navigate('/portal/cursos')
    } catch {
      toast.error('Falha ao alterar curso. Tente novamente.')
    }
  }
  return (
    <LayoutPortal>
      <h1 className="mt-4">Editar curso</h1>
      {course ? (
        <UpsertCourseForm
          initialValue={{
            name: course.name,
            coordinator: course.coordinator,
            shortDescription: course.shortDescription,
            description: course.description,
            image: course.image
          }}
          buttonLabel='Alterar'
          onSubmit={handleSubmit}
        />
      ) : (
        <Loading />
      )}
    </LayoutPortal>
  )
}