import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CardStudio } from "../../componentes/CardStudio";
import { Layout } from "../../componentes/Layout";
import { Loading } from "../../componentes/Loading";
import { getStudios } from "../../services/Studios.service";

export function StudiosView() {
    const [studios, setStudios] = useState([])
    const [loading, setLoading] = useState(true)
    const [erroMsg, setErrorMsg] = useState()
    
    useEffect(() => {
        
        const fetchStudios = async () =>{
            try {
                const data = await getStudios()
                setStudios(data)
                console.log(data)
            } catch (error) {
                setErrorMsg('Recarregue a página')
            }
            setLoading(false)
        }
        fetchStudios()
        
    }, [])
    return (
        <Layout>
            <Container className="align-items-center">
                <h2 className="text-center mt-5 mb-5 text-white">Escolha seu estúdio</h2>
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
