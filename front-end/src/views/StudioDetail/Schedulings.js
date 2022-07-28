import { Alert, Button, Table} from "react-bootstrap";

export function Schedulings({ schedulings }) {
    return (
        <>
            <h2 className="text-white mt-5 mb-5 text-center">Horários disponíveis</h2>
            {schedulings.length > 0 ? (

                <Table className="text-white shadow border" responsive>
                    <thead >
                        <tr>
                            <th>Estúdio</th>
                            <th>Serviço</th>
                            <th>Dia</th>
                            <th>horário</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedulings.map(scheduling => (
                            <tr key={scheduling.id}>
                                <td>{scheduling.local}</td>
                                <td>{scheduling.service}</td>
                                <td>{scheduling.day}</td>
                                <td>{scheduling.hour}</td>
                                <td><Button
                                    >
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