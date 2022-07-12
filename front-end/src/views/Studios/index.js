import { Col, Container, Row } from "react-bootstrap";
import { CardStudio } from "../../componentes/CardStudios";
import { Layout } from "../../componentes/Layout";

const studios = [
    {
        id: 1,
        name: 'Mesquita GS',
        shortDescription: 'Bla',
    },
    {
        id: 2,
        name: 'Mesquita GS',
        shortDescription: 'Bla',
    },
    {
        id: 3,
        name: 'Mesquita GS',
        shortDescription: 'Bla',
    },
    {
        id: 4,
        name: 'Mesquita GS',
        shortDescription: 'Bla',
    },
    {
        id: 5,
        name: 'Mesquita GS',
        shortDescription: 'Bla',
    },
    {
        id: 6,
        name: 'Mesquita GS',
        shortDescription: 'Bla',
    },
]

export function StudiosView() {
    return (
        <Layout>
            <Container>
                <h2 className="text-center mt-4">Escolha seu estúdio</h2>
                <Row>
                    {studios.map(studios => (
                        <Col key={studios.id} lg={4}>
                            <CardStudio studios={studios} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    )
}