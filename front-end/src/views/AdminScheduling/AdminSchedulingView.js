import { LayoutPortal } from '../../componentes/LayoutPortal'
import { PortalHeader } from '../../componentes/PortalHeader'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Loading } from '../../componentes/Loading'
import { TableSchedulings } from './TableSchedulings'
import { getSchedulings } from '../../services/Schedulings.service'
import { getStudios } from '../../services/Studios.service'
import { Button } from 'react-bootstrap'

export function AdminSchedulingsView() {
    const [schedulings, setSchedulings] = useState([])
    const [loadingScheduling, setLoadingScheduling] = useState(true)
    const [studios, setStudios] = useState([])
    const [loadingStudio, setLoadingStudio] = useState(true)
    const [erroMsg, setErrorMsg] = useState()

    const fetchScheduling = async () => {
        try {
            const data = await getSchedulings()
            setSchedulings(data)
            console.log(data)
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
                buttonLink='/portal/novoagendamento'
            />
            {loadingScheduling && <Loading />}
            <TableSchedulings schedulings={schedulings} onDeleteScheduling={fetchScheduling} />
            {/* <BtnStyled>Cadastrar novo horário</BtnStyled> */}
        </LayoutPortal>
    )

}

// const BtnStyled = styled.button`
//   background-color: #8672ED;
//   color: #fff;
//   border-radius: 3.125rem;
//   width: 20.938rem;
//   padding: 0.5rem;
// `