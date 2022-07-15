import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../componentes/Layout";
import { Loading } from "../../componentes/Loading";
import { NotFoundView } from "../NotFound/";

export function StudioDetailView() {
    const { id } = useParams()
    const [studios, setStudio] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    useEffect(() => {
        // fetch(`${process.env.REACT_APP_API_URL}/studios`)
        const fetchStudios = async () => {
            try {
                const response = await fetch(`http://localhost:3001/studios/${id}`)
                if (!response.ok) {
                    throw new Error('Response not ok.')
                }
                const data = await response.json()
                setStudio(data)
                setStudio(false)
            } catch (err) {
                const message = err.message === 'Response not ok.'
                    ? '404'
                    : 'Falha'

                setErrorMsg(message)
                setLoading(false)
            }
        }
        fetchStudios()
    }, [id])

    if (loading) {
        return <Loading />
    }
    if (errorMsg === '404') {
        return <NotFoundView />
    }
    return (
        <Layout>
            <Container>
                {errorMsg ? (
                    <Alert variant="danger" className="mt-3">
                        {errorMsg}
                    </Alert>
                ) : (
                    <h1>{studios?.name}</h1>
                )}
            </Container>
        </Layout>
    )
}