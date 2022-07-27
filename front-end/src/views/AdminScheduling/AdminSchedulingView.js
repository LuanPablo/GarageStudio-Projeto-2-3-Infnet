import { LayoutPortal } from '../../componentes/LayoutPortal'
import { PortalHeader } from '../../componentes/PortalHeader'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Loading } from '../../componentes/Loading'
import { TableSchedulings } from './TableSchedulings'
import { getSchedulings } from '../../services/Schedulings.service'



export function AdminSchedulingsView() {
    const [schedulings, setSchedulings] = useState([])
    const [loadingScheduling, setLoadingScheduling] = useState(true)

    const fetchScheduling = async () => {
        try {
            const data = await getSchedulings()
            setSchedulings(data)

        } catch (error) {
            toast.error('Falha ao buscar horários')
        }
        setLoadingScheduling(false)
    }

    useEffect(() => {

        fetchScheduling()

    }, [])

    return (
        <LayoutPortal >
            <PortalHeader className="Text-white"
                title='Todos os agendamentos'
                buttonText='Cadastrar novo horário'
                buttonLink='/portal/newscheduling'
            />
            {loadingScheduling && <Loading />}
            <TableSchedulings schedulings={schedulings} onDeleteScheduling={fetchScheduling} />
        </LayoutPortal>
    )

}