import { Alert, Button, Card, Container, ListGroup, Table, } from "react-bootstrap";
import { useSelector } from "react-redux";
import { createScheduling } from "../../services/Schedulings.service";
import { selectUser } from "../../store/User/User.selectors";

export function Schedulings({ schedulings }) {
    const user = useSelector(selectUser)

    function handleScheduling() {
        console.log(user)
        createScheduling({
            service: "Ensaio",
            day: "10/07/2022",
            hour: "16:00",
            scheduling: "true",
            studioId: 1,
            user
        })
    }
    return (
        <>
            <h2 className="text-white mt-5 mb-5 text-align-center">Horários disponíveis</h2>
            {schedulings.length > 0 ? (

                <Table className="text-white" responsive>
                    <thead >
                        <tr>
                            <th>Serviço</th>
                            <th>Dia</th>
                            <th>horário</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedulings.map(scheduling => (
                            <tr key={scheduling.id}>
                                <td>{scheduling.service}</td>
                                <td>{scheduling.day}</td>
                                <td>{scheduling.hour}</td>
                                <td><Button
                                    onClick={handleScheduling}>
                                    Agendar
                                </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <Alert variant="info">
                    Não possui horários cadastrados
                </Alert>
            )}

        </>
    )
}