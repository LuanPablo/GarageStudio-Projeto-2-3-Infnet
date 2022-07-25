import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";


export function CardStudio ({studios}) {
    return (
        <Card className="h-100 cardstudio">
            <Card.Body className="d-flex flex-column">
                <CardImg variant="top" src={studios.image} width={328} height={160} alt={studios.name}/>
                <Card.Title className="mt-4 mb-4 text-center">{studios.name}</Card.Title>
                <Card.Text className="d-flex flex-column">
                    <h5>Serviços:</h5>
                    <h7>Ensaio por hora</h7> 
                    <h7>Gravação e Regravação</h7>
                    <h7>Mixagem e masterização</h7>
                </Card.Text>
                <BtnStyled className="text-center mt-4" as={Link} to={`/studios/${studios.id}`}>Agendar</BtnStyled>
            </Card.Body>
        </Card>
    )
}

const BtnStyled = styled.button`
    background-color: #8672ED;
    color: #fff;
    border-radius: 3.125rem;  
    width: 15.5rem;
    padding: 0.5rem;
    text-decoration:none;
    margin: auto;
`
const CardImg = styled(Card.Img)`
    width:100%;   
`