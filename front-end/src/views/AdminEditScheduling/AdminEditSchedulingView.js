import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Layout } from '../../componentes/Layout'
import { UpsertSchedulingForm } from '../../componentes/UpsertSchedulingForm'
import { getSchedulingById, updateScheduling } from '../../services/Schedulings.service'
import { Loading } from '../../componentes/Loading'
  
export function AdminEditSchedulingView() {
    const { id } = useParams()
    const [scheduling, setScheduling] = useState()
    
    useEffect(() => {
        const fetchScheduling = async () => {
            try {
                const schedulingData = await getSchedulingById(id)
                setScheduling(schedulingData)
            } catch {
                toast.error('Falha ao buscar dados do agendamento')
            }
        }
        fetchScheduling()
    }, [id])

    const navigate = useNavigate()
    const handleSubmit = async (formData) => {
        try {
            await updateScheduling(id, formData)
            toast.success('Agendamento alterado com sucesso')
            navigate('/portal/schedulings')
        } catch  {
            toast.error('Falha ao alterar agendamento')
        }
    }

    return (
        <Layout>
            <TitleStyled>Editar</TitleStyled>
            {scheduling ? (
                <UpsertSchedulingForm
                    initialValue={{

                        service: scheduling.service,
                        day: scheduling.day,
                        hour: scheduling.hour,
                        local: scheduling.local,
                        studioId: scheduling.studioId,
                        id: scheduling.id                        
                    }}
                buttonLabel='Alterar'
                onSubmit={handleSubmit}
                />
            ) : (
                <Loading />
            )}
        </Layout>
    )

}
const TitleStyled = styled.h2`
    color: #fff;
    margin: 2rem;
    text-align: center;
`