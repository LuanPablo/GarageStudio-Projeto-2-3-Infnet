import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export function CardStudio ({studios}) {
    return (
        <Card className="h-100 cardstudio">
            <Card.Body className="d-flex flex-column align-items-center">
                <Card.Img variant="top" src={studios.image} width={328} height={160} alt={studios.name}/>
                <Card.Title>{studios.name}</Card.Title>
                <Card.Text>{studios.shortDescription}</Card.Text>
                <Button as={Link} to={`/studios/${studios.id}`}>Agendar</Button>
            </Card.Body>
        </Card>
    )
}