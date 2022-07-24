import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { LayoutPortal } from "../../components/LayoutPortal";
import { Loading } from "../../components/Loading";
import { UpsertStudioForm } from "../../components/UpsertStudioForm";
import { getStudioById, updateStudio } from "../../services/Studios.service";

export function AdminEditStudioView () {
  const { id } = useParams()
  const [studio, setStudio] = useState()
  useEffect(() => {
    const fetchStudio = async () => {
      try {
        const studioData = await getStudioById(id)
        setStudio(studioData)
      } catch {
        toast.error('Falha ao buscar dados do curso. Recarregue a página.')
      }
    }
    fetchStudio()
  }, [id])
  const navigate = useNavigate()
  const handleSubmit = async (formData) => {
    try {
      await updateStudio(id, formData)
      toast.success('Curso alterado com sucesso.')
      navigate('/portal/cursos')
    } catch {
      toast.error('Falha ao alterar curso. Tente novamente.')
    }
  }
  return (
    <LayoutPortal>
      <h1 className="mt-4">Editar curso</h1>
      {studio ? (
        <UpsertStudioForm
          initialValue={{
            name: studio.name,
            coordinator: studio.coordinator,
            shortDescription: studio.shortDescription,
            description: studio.description,
            image: studio.image
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