import { Card } from "react-bootstrap";

export function CardStudio({studios}) {

    return (
        <Card>
            <Card.Body>
                <Card.Title>{studios.name}</Card.Title>
                <Card.Text>Texto</Card.Text>
            </Card.Body>
        </Card>
    )
}