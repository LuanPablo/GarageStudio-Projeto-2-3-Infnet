import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LayoutPortal } from '../../components/LayoutPortal'
import { UpsertStudioForm } from '../../components/UpsertStudioForm'
import { createStudio } from '../../services/Studios.service'

export function AdminAddStudioView () {
  const navigate = useNavigate()
  const handleSubmit = async (formData) => {
    try {
      await createStudio(formData)
      toast.success('Curso cadastrado com sucesso.')
      navigate('/portal/studios')
    } catch {
      toast.error('Falha ao cadastrar curso. Tente novamente.')
    }
  }
  return (
    <LayoutPortal>
      <h1 className='mt-4'>Novo curso</h1>
      <UpsertStudioForm onSubmit={handleSubmit} />
    </LayoutPortal>
  )
}