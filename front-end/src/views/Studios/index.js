import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CardStudio } from "../../componentes/CardStudio";
import { Layout } from "../../componentes/Layout";
import { Loading } from "../../componentes/Loading";

export function StudiosView() {
    const [studios, setStudios] = useState([])
    const [loading, setLoading] = useState(true)
    const [erroMsg, setErrorMsg] = useState()
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/studios`)
            .then((responde) => responde.json())
            .then((data) => {
                setStudios(data)
            })
            .catch(() => {
                setErrorMsg('Recarregue a página')
                setLoading(false)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    return (
        <Layout>
            <Container>
                <h2 className="text-center mt-4">Escolha seu estúdio</h2>
                {loading && (<Loading />)}
                {erroMsg && (
                    <Alert variant="danger">{erroMsg}</Alert>
                )}
                <Row>
                    {studios.map(studios => (
                        <Col key={studios.id} className='mb-4' lg={4}>
                            <CardStudio studios={studios} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    )
}