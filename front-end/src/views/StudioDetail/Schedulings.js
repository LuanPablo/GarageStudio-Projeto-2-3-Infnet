import { useState } from "react";
import { Alert, Button, Form, FormCheck, Table } from "react-bootstrap";

export function Schedulings({ schedulings }) {
    return (
        <>
            <h2 as="h1">Horários disponíveis</h2>
            {schedulings.length > 0 ? (
                <Table responsive>
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
                                    type="submit">
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